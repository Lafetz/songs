import { createSlice } from "@reduxjs/toolkit";
import Song from "../../types/songs";

export interface SongsState {}
const initialState: Song[] = [];
const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
});
export default songsSlice.reducer;
