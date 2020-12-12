import styled from 'styled-components/native';

export const Container = styled.View`
  border-bottom-width: 0.8px;
  border-color: lightgray;
  padding: 15px 15px 0px;
  justify-content: space-around;
`;

export const RepoName = styled.Text`
  font-family: '';
  font-size: 16px;
  font-weight: 700;
`;

export const Description = styled.Text`
  font-family: '';
  margin-vertical: 8px;
  color: #777;
  font-size: 15px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const RepoInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Star = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;

export const StarCount = styled.Text`
  font-family: '';
  color: #777;
  font-size: 15px;
`;

export const WrapperBtn = styled.View`
  background-color: cornflowerblue;
  padding: 5px 10px;
  border-radius: 6px;
  width: 140px;
`;

export const LoadStargazers = styled.Text`
  font-family: '';
  color: white;
  text-align: center;
`;

export const LoadMoreStargazers = styled.View`
  background-color: cornflowerblue;
  border-radius: 8px;
  padding: 8px;
  margin: 15px 60px;
`;

export const LoadMoreStargazersBtn = styled.Text`
  font-size: 16px;
  font-family: '';
  text-align: center;
  color: white;
`;
