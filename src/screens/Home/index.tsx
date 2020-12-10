import React from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import SearchInput from 'components/SearchInput';

const Container = styled.View`
  flex: 1;
  margin-horizontal: 15px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: gray;
  font-family: '';
`;

const Home = () => {
  const userState = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <SearchInput />
      {userState.user?.name ? (
        <>
          <Text>{userState.user?.name}</Text>
          <Text>{userState.user?.login}</Text>
        </>
      ) : (
        <Text>{userState.user.message}</Text>
      )}
    </Container>
  );
};

export default Home;
