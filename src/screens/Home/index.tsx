import React from 'react';
import styled from 'styled-components/native';
import SearchInput from 'components/SearchInput';
import UserInfo from 'components/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/store';
import Repositories from 'components/Repositories';

const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  background-color: white;
`;

const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <SearchInput />
      {user?.login && (
        <>
          <UserInfo />
          <Repositories />
        </>
      )}
    </Container>
  );
};

export default Home;
