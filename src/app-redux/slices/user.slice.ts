import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import githubApi from 'services/github-api';

interface IUserState {
  user: any;
  loading: boolean;
  error: any;
}

export const fetchInfoUser = createAsyncThunk(
  'user/fetchInfoUser',
  async (value: string, { rejectWithValue }) => {
    try {
      const data = await githubApi.getUser(value);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: IUserState = {
  user: {},
  loading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchInfoUser.pending, state => {
        state.loading = true;
      })
      .addCase(fetchInfoUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchInfoUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

const { reducer } = userSlice;
export default reducer;
