import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom'; // Assuming you use react-router-dom for navigation
import { RootState } from '../redux/store';
import { songsUpdateStart } from '../redux/slices/songsSlice';
import Song from '../types/songs';
import BackBtn from '../components/backBtn';

const EditSong: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const dispatch = useDispatch();
 
  const songs = useSelector((state: RootState) => state.songs.songs);
  const [editedSong, setEditedSong] = useState<Song | null>(null);

  useEffect(() => {
    const song = songs.find(song => song._id === id);
    if (song) {
      setEditedSong({ ...song });
    } else {
      // get song from api or display error
    }
  }, [id, songs]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedSong) {
      dispatch(songsUpdateStart(editedSong));
      
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editedSong) {
      setEditedSong({ ...editedSong, [name]: value });
    }
  };

  if (!editedSong) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <BackBtn/>
      <h2>Edit Song</h2>
      <form onSubmit={handleSave}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editedSong.name}
          onChange={handleInputChange}
        />
        <label>URL:</label>
        <input
          type="text"
          name="url"
          value={editedSong.url}
          onChange={handleInputChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditSong;