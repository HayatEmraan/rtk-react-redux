import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";
import { baseAPI } from "./apis/api";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
