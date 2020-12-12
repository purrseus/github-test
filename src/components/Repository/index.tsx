import React, { useState } from 'react';
import { Text, TouchableNativeFeedback } from 'react-native';
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
} from './styled';
import { StarIcon } from 'assets/icons';
import numeral from 'numeral';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/store';
import githubApi from 'services/github-api';

const Repository = ({ item }: { item: IResponseRepos }) => {
  const { loading } = useSelector((state: RootState) => state.repos);
  const [stargazersList, setStargazersList] = useState<IResponseUser[]>([]);
  const [showStargazers, setShowStargazers] = useState<boolean | string>(
    'load'
  );

  const onLoadStargazers = async () => {
    if (showStargazers === 'load') {
      const { data } = await githubApi.getStargazersOfCurrentRepo(
        item.full_name,
        1
      );
      setStargazersList([...data]);
      setShowStargazers(true);
    }

    if (showStargazers === true) {
      setShowStargazers(false);
    }

    if (showStargazers === false) {
      setShowStargazers(true);
    }
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
                {showStargazers === 'load'
                  ? 'Load Stargazers'
                  : showStargazers
                  ? 'Hide Stargazers'
                  : 'Show Stargazers'}
              </LoadStargazers>
            </WrapperBtn>
          </TouchableNativeFeedback>
        )}
      </Wrapper>
      {showStargazers === true && (
        <Text>{JSON.stringify(stargazersList, null, 2)}</Text>
      )}
    </Container>
  );
};

export default React.memo(Repository);
