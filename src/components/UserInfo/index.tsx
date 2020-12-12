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

const UserInfo = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { repos } = useSelector((state: RootState) => state.repos);

  return (
    <Container>
      <Avatar source={{ uri: user?.avatar_url }} />

      <NameCard>
        <FullName>{user?.name}</FullName>
        <UserName ellipsizeMode="tail" numberOfLines={1}>
          {user?.login}
        </UserName>
      </NameCard>

      <Repositories>{`${repos.length}/${user?.public_repos}`}</Repositories>
    </Container>
  );
};

export default UserInfo;
