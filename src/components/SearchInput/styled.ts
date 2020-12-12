import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.8px;
  border-color: #aaa;
  padding-horizontal: 8px;
  margin-vertical: 5px;
`;

export const SearchTextInput = styled.TextInput`
  font-size: 18px;
  flex: 1;
`;

export const ClearTextIcon = styled.Image`
  width: 40px;
  height: 40px;
`;
