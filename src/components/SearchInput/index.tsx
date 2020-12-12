import React, { useState, useRef } from 'react';
import { TextInput, TouchableWithoutFeedback, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app-redux/store';
import { fetchInfoUser } from 'app-redux/slices/user.slice';
import { fetchReposOfCurrentUser } from 'app-redux/slices/repos.slice';
import { Container, SearchTextInput, ClearTextIcon } from './styled';
import { RemoveIcon } from 'assets/icons/index';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';

const SearchInput = () => {
  const netInfo: NetInfoState = useNetInfo();
  const [isHideIcon, setIsHideIcon] = useState<boolean>(true);
  const inputRef = useRef<TextInput | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const onSubmitTextField = async (value: string) => {
    if (!value) {
      return;
    }
    if (!netInfo.isConnected) {
      Alert.alert('', 'No Internet Connection.');
      return;
    }

    try {
      await Promise.all([
        dispatch(fetchInfoUser(value)),
        dispatch(fetchReposOfCurrentUser({ value, page: 1 })),
      ]);
    } catch (error) {
      return error;
    }
  };

  const onHideRemoveIcon = (text: string) => {
    text.length ? setIsHideIcon(false) : setIsHideIcon(true);
  };

  const onClearText = () => {
    inputRef?.current?.clear();
    inputRef?.current?.focus();
    setIsHideIcon(true);
  };

  return (
    <Container>
      <SearchTextInput
        ref={inputRef}
        placeholder="Search by username..."
        returnKeyType="search"
        selectionColor="dodgerblue"
        onChange={({ nativeEvent }) => onHideRemoveIcon(nativeEvent.text)}
        onSubmitEditing={({ nativeEvent }) =>
          onSubmitTextField(nativeEvent.text.trim().toLowerCase())
        }
      />
      {!isHideIcon && (
        <TouchableWithoutFeedback onPress={onClearText}>
          <ClearTextIcon source={RemoveIcon} />
        </TouchableWithoutFeedback>
      )}
    </Container>
  );
};

export default SearchInput;
