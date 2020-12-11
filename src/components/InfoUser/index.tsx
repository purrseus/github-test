import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/store';
import {
  Container,
  Avatar,
  NameCard,
  FullName,
  UserName,
  Repositories,
} from './styled';

const InfoUser = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <Avatar source={{ uri: user.avatar_url }} />

      <NameCard>
        <FullName>{user.name}</FullName>
        <UserName ellipsizeMode="tail" numberOfLines={1}>
          {user.login}
        </UserName>
      </NameCard>

      <Repositories>{user.public_repos}</Repositories>
    </Container>
  );
};

export default InfoUser;
