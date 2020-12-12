import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import SearchInput from 'components/SearchInput';
import UserInfo from 'components/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/store';
import Repositories from 'components/Repositories';
import SplashScreen from 'react-native-splash-screen';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Error = styled.Text`
  font-family: '';
  font-size: 18px;
  text-align: center;
  margin: 20px;
`;

const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <SearchInput />
      {user?.login && (
        <>
          <UserInfo />
          <Repositories />
        </>
      )}
      {user === undefined && <Error>Not Found.</Error>}
    </Container>
  );
};

export default Home;
