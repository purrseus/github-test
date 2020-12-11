import React from 'react';
import styled from 'styled-components/native';
import SearchInput from 'components/SearchInput';
import InfoUser from 'components/InfoUser';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/store';

const Container = styled.View`
  flex: 1;
  margin-horizontal: 20px;
`;

const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <SearchInput />
      {user.login && <InfoUser />}
    </Container>
  );
};

export default Home;
