import Song from "../types/songs";

const API_URL = "https://66745aa575872d0e0a962756.mockapi.io/api/v1/songs";
export const songsAPI = {
  getAllSongs: async (): Promise<Song[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch songs");
    }
    return response.json();
  },
  getSongById: async (songId: string): Promise<Song> => {
    const response = await fetch(`${API_URL}/${songId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch song with id ${songId}`);
    }
    return response.json();
  },
  addSong: async (newSong: Omit<Song, "_id">): Promise<Song> => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
    if (!response.ok) {
      throw new Error("Failed to add song");
    }
    return response.json();
  },
  updateSong: async (updatedSong: Song): Promise<Song> => {
    const response = await fetch(`${API_URL}/${updatedSong._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSong),
    });
    if (!response.ok) {
      throw new Error("Failed to update song");
    }
    return response.json();
  },
  deleteSong: async (songId: string): Promise<void> => {
    const response = await fetch(`${API_URL}/${songId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete song");
    }
  },
};
