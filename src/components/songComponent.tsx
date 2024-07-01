import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Song from '../types/songs';
import { songsUpdateStart, songsDeleteStart } from '../redux/slices/songsSlice';

interface SongProps {
  song: Song;
}

const SongComponent: React.FC<SongProps> = ({ song }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState({ ...song });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(songsUpdateStart(editedSong));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(songsDeleteStart(song._id)); 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedSong({ ...editedSong, [name]: value });
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedSong.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="url"
            value={editedSong.url}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <div>Name: {song.name}</div>
          <div>URL: {song.url}</div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default SongComponent;