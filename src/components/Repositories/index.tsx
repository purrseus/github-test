import React from 'react';
import { FlatList } from 'react-native';
import { Container } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/store';
import Repository from 'components/Repository';
import LoadMoreBtn from 'components/LoadMoreBtn';

const Repositories = () => {
  const { repos } = useSelector((state: RootState) => state.repos);

  return (
    <Container>
      <FlatList
        data={repos}
        renderItem={({ item }) => <Repository item={item} />}
        keyExtractor={(item, index) => '' + index}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <LoadMoreBtn />}
      />
    </Container>
  );
};

export default Repositories;
