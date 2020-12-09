import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-width: 1px;
`;

const HelloWorld = styled.Text`
  color: darkgray;
  font-size: 20px;
  font-family: '';
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <HelloWorld>Hello World!!!</HelloWorld>
      </Container>
    </>
  );
};

export default App;
