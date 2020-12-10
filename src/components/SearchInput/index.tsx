import React, { useState, useRef } from 'react';
import { TextInput, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { fetchInfoUser } from 'redux/slices/user.slice';
import { Container, SearchTextInput, ClearTextIcon } from './styled';
import { RemoveIcon } from 'assets/icons/index';

const SearchInput = () => {
  const [isHideIcon, setIsHideIcon] = useState<boolean>(true);
  const inputRef = useRef<TextInput | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const onSubmitTextField = async (value: string) => {
    if (!value.trim()) {
      return;
    }

    try {
      await dispatch(fetchInfoUser(value));
    } catch (error) {
      return error;
    }
  };

  const onHideRemoveIcon = (text: string) => {
    text.length ? setIsHideIcon(false) : setIsHideIcon(true);
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
          onSubmitTextField(nativeEvent.text.toLowerCase())
        }
      />
      {!isHideIcon && (
        <TouchableWithoutFeedback
          onPress={() => {
            inputRef?.current?.clear();
            setIsHideIcon(true);
          }}
        >
          <ClearTextIcon source={RemoveIcon} />
        </TouchableWithoutFeedback>
      )}
    </Container>
  );
};

export default SearchInput;
