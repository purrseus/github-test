import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/store';
import Repository from 'components/Repository';
import LoadMoreBtn from 'components/LoadMoreBtn';

const Repositories = () => {
  const { repos } = useSelector((state: RootState) => state.repos);
  const { loading: userLoading } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <Container>
      {!userLoading ? (
        <FlatList
          data={repos}
          renderItem={({ item }) => <Repository item={item} />}
          keyExtractor={(item, index) => '' + index}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <LoadMoreBtn />}
        />
      ) : (
        <ActivityIndicator size={60} color="cornflowerblue" />
      )}
    </Container>
  );
};

export default Repositories;
