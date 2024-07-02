import Song from "../../types/songs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SongsState {
  songs: Song[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SongsState = {
  songs: [],
  isLoading: false,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // Get Songs
    songsGetStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    songsGetSuccess(state, action: PayloadAction<Song[]>) {
      state.isLoading = false;
      state.songs = action.payload;
    },
    songsGetFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    //Add Song
    songsAddStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    songsAddSuccess(state, action: PayloadAction<Song>) {
      state.isLoading = false;
      state.songs.push(action.payload);
    },
    songsAddFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //@ts-ignore
    songsAddRequest(state, action: PayloadAction<Omit<Song, "_id">>) {
      state.isLoading = true;
    },

    // Update Song
    //@ts-ignore
    songsUpdateStart(state, action: PayloadAction<Song>) {
      state.isLoading = true;
      state.error = null;
    },
    songsUpdateSuccess(state, action: PayloadAction<Song>) {
      state.isLoading = false;
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    songsUpdateFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Delete Song
    //@ts-ignore
    songsDeleteStart(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.error = null;
    },
    songsDeleteSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
    songsDeleteFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
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
