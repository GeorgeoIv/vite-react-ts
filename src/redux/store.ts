import { configureStore } from '@reduxjs/toolkit';
// import  userReducer  from './slices/userSlice';
import roomsReducer from './slices/roomsSlice';
// import favoriteReducer from './slices/favoriteSlice'

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    // user: userReducer,
    // favorite: favoriteReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
