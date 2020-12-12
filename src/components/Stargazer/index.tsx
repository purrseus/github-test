import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Container, Avatar, StargazerName } from './styled';
import { IResponseUser } from 'app-redux/slices/user.slice';

const Stargazer = ({ login, avatar_url }: IResponseUser) => {
  return (
    <TouchableNativeFeedback>
      <Container>
        <Avatar source={{ uri: avatar_url }} />
        <StargazerName numberOfLines={1}>{login}</StargazerName>
      </Container>
    </TouchableNativeFeedback>
  );
};

export default React.memo(Stargazer);
