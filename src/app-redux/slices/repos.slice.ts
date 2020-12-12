import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import githubApi from 'services/github-api';

export interface IResponseRepos {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

interface IThunkParams {
  value: string;
  page: number;
}

interface IReposState {
  loading: boolean;
  repos: IResponseRepos[];
}

export const fetchReposOfCurrentUser = createAsyncThunk(
  'repos/fetchReposOfCurrentUser',
  async ({ value, page }: IThunkParams, { rejectWithValue }) => {
    try {
      const { data } = await githubApi.getReposOfCurrentUser(value, page);
      return { data, page };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: IReposState = {
  loading: false,
  repos: [],
};

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchReposOfCurrentUser.pending, state => {
        state.loading = true;
      })
      .addCase(fetchReposOfCurrentUser.rejected, state => {
        state.loading = false;
      })
      .addCase(fetchReposOfCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.page === 1
          ? (state.repos = [...action.payload.data])
          : state.repos.push(...action.payload.data);
      });
  },
});

const { reducer } = reposSlice;
export default reducer;
