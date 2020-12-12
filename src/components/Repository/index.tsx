import React, { useState } from 'react';
import {
  FlatList,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';
import { IResponseRepos } from 'app-redux/slices/repos.slice';
import { IResponseUser } from 'app-redux/slices/user.slice';
import {
  Container,
  RepoName,
  Description,
  Wrapper,
  RepoInfo,
  Star,
  StarCount,
  WrapperBtn,
  LoadStargazers,
  LoadMoreStargazers,
  LoadMoreStargazersBtn,
} from './styled';
import { StarIcon } from 'assets/icons';
import numeral from 'numeral';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/store';
import githubApi from 'services/github-api';
import Stargazer from 'components/Stargazer';

const Repository = ({ item }: { item: IResponseRepos }) => {
  const { loading } = useSelector((state: RootState) => state.repos);
  const [isStargazerLoading, setIsStargazerLoading] = useState<boolean>(false);
  const [stargazersList, setStargazersList] = useState<IResponseUser[]>([]);
  const [isShowStargazers, setIsShowStargazers] = useState<boolean>(false);

  const onLoadStargazers = async () => {
    if (!isShowStargazers) {
      setIsStargazerLoading(true);
      const { data } = await githubApi.getStargazersOfCurrentRepo(
        item.full_name,
        1
      );
      setStargazersList([...data]);
      setIsShowStargazers(true);
      setIsStargazerLoading(false);
      return;
    }

    if (isShowStargazers) {
      setIsShowStargazers(false);
      return;
    }
  };

  const onLoadMoreStargazers = async () => {
    setIsStargazerLoading(true);
    const { data } = await githubApi.getStargazersOfCurrentRepo(
      item.full_name,
      stargazersList.length / 30 + 1
    );
    setStargazersList([...stargazersList, ...data]);
    setIsStargazerLoading(false);
  };

  return (
    <Container>
      <RepoName numberOfLines={1}>{item.name}</RepoName>
      <Description numberOfLines={3}>{item.description}</Description>

      <Wrapper>
        <RepoInfo>
          <Star source={StarIcon} />
          <StarCount>
            {numeral(item.stargazers_count).format('0a')} stars
          </StarCount>
        </RepoInfo>

        {!!item.stargazers_count && (
          <TouchableNativeFeedback
            onPress={onLoadStargazers}
            disabled={loading}
          >
            <WrapperBtn>
              <LoadStargazers>
                {isStargazerLoading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : isShowStargazers ? (
                  'Hide Stargazers'
                ) : (
                  'Load Stargazers'
                )}
              </LoadStargazers>
            </WrapperBtn>
          </TouchableNativeFeedback>
        )}
      </Wrapper>

      {isShowStargazers && (
        <FlatList
          data={stargazersList}
          // eslint-disable-next-line no-shadow
          renderItem={({ item }) => <Stargazer {...item} />}
          keyExtractor={(_item, index) => '' + index}
          ListFooterComponent={() => (
            <>
              {item.stargazers_count !== stargazersList.length && (
                <TouchableNativeFeedback
                  onPress={onLoadMoreStargazers}
                  disabled={loading}
                >
                  <LoadMoreStargazers>
                    <LoadMoreStargazersBtn>
                      {isStargazerLoading ? (
                        <ActivityIndicator size="small" color="white" />
                      ) : (
                        'Load More Stargazers'
                      )}
                    </LoadMoreStargazersBtn>
                  </LoadMoreStargazers>
                </TouchableNativeFeedback>
              )}
            </>
          )}
        />
      )}
    </Container>
  );
};

export default React.memo(Repository);
