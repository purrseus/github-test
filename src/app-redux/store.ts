import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import reposReducer from './slices/repos.slice';

const store = configureStore({
  reducer: { user: userReducer, repos: reposReducer },
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
