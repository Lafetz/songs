import { takeLatest, call, put } from "redux-saga/effects";

import {
  songsGetStart,
  songsGetSuccess,
  songsGetFailure,
  songsAddSuccess,
  songsAddFailure,
  songsAddRequest,
  songsUpdateStart,
  songsUpdateSuccess,
  songsUpdateFailure,
  songsDeleteStart,
  songsDeleteSuccess,
  songsDeleteFailure,
} from "../slices/songsSlice";
import Song from "../../types/songs";
import { songsAPI } from "../../services/songApi";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchSongsSaga() {
  try {
    const songs: Song[] = yield call(songsAPI.getAllSongs);
    yield put(songsGetSuccess(songs));
  } catch (error: any) {
    yield put(songsGetFailure(error.message));
  }
}

function* addSongSaga(action: PayloadAction<Omit<Song, "_id">>) {
  try {
    const newSong: Song = yield call(songsAPI.addSong, action.payload);
    yield put(songsAddSuccess(newSong));
  } catch (error: any) {
    yield put(songsAddFailure(error.message));
  }
}

function* updateSongSaga(action: PayloadAction<Song>) {
  try {
    const updatedSong: Song = yield call(songsAPI.updateSong, action.payload);
    yield put(songsUpdateSuccess(updatedSong));
  } catch (error: any) {
    yield put(songsUpdateFailure(error.message));
  }
}

function* deleteSongSaga(action: PayloadAction<string>) {
  try {
    yield call(songsAPI.deleteSong, action.payload);
    yield put(songsDeleteSuccess(action.payload));
  } catch (error: any) {
    yield put(songsDeleteFailure(error.message));
  }
}

export default function* songsSaga() {
  yield takeLatest(songsGetStart.type, fetchSongsSaga);
  yield takeLatest(songsAddRequest.type, addSongSaga);
  yield takeLatest(songsUpdateStart.type, updateSongSaga);
  yield takeLatest(songsDeleteStart.type, deleteSongSaga);
}
