import React from 'react';
import { TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import { RootState, AppDispatch } from 'app-redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReposOfCurrentUser } from 'app-redux/slices/repos.slice';
import { Wrapper, LoadMore } from './styled';

const LoadMoreBtn = () => {
  const { repos, loading } = useSelector((state: RootState) => state.repos);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const onLoadMoreRepos = async () => {
    if (user) {
      await dispatch(
        fetchReposOfCurrentUser({
          value: user.login,
          page: (repos.length + 30) / 30,
        })
      );
    }
  };

  return (
    <>
      {repos.length !== user?.public_repos && (
        <TouchableNativeFeedback onPress={onLoadMoreRepos} disabled={loading}>
          <Wrapper>
            <LoadMore>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                'Load More'
              )}
            </LoadMore>
          </Wrapper>
        </TouchableNativeFeedback>
      )}
    </>
  );
};

export default LoadMoreBtn;
