import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./features/songs/songsSlice";
export const store = configureStore({
  reducer: {
    sogns: songsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
