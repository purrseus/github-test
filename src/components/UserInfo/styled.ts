import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 0.5px;
  border-color: #aaa;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

export const NameCard = styled.View`
  margin-left: 10px;
  justify-content: center;
  width: 65%;
`;

export const FullName = styled.Text`
  font-family: '';
  font-size: 24px;
  font-weight: bold;
`;

export const UserName = styled.Text`
  font-family: '';
  font-size: 16px;
`;

export const Repositories = styled.Text`
  font-family: '';
`;
