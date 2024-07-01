import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../redux/slices/songsSlice";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "../redux/sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
