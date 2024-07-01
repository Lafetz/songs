import Song from "../../types/songs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SongsState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

const initialState: SongsState = {
  songs: [],
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // Get Songs
    songsGetStart(state) {
      state.loading = true;
      state.error = null;
    },
    songsGetSuccess(state, action: PayloadAction<Song[]>) {
      state.loading = false;
      state.songs = action.payload;
    },
    songsGetFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    //Add Song
    songsAddStart(state) {
      state.loading = true;
      state.error = null;
    },
    songsAddSuccess(state, action: PayloadAction<Song>) {
      state.loading = false;
      state.songs.push(action.payload);
    },
    songsAddFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    songsAddRequest(state, action: PayloadAction<Omit<Song, "_id">>) {
      state.loading = true;
    },

    // Update Song
    songsUpdateStart(state, action: PayloadAction<Song>) {
      state.loading = true;
      state.error = null;
    },
    songsUpdateSuccess(state, action: PayloadAction<Song>) {
      state.loading = false;
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    songsUpdateFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete Song
    songsDeleteStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    songsDeleteSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
    songsDeleteFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  songsGetStart,
  songsGetSuccess,
  songsGetFailure,
  songsAddStart,
  songsAddSuccess,
  songsAddFailure,
  songsAddRequest,
  songsUpdateStart,
  songsUpdateSuccess,
  songsUpdateFailure,
  songsDeleteStart,
  songsDeleteSuccess,
  songsDeleteFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
