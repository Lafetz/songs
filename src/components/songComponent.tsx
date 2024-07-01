import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Song from '../types/songs';

interface SongProps {
  song: Song;
}

const SongComponent: React.FC<SongProps> = ({ song }) => {
  return (
    <div>
      <div>
        <div>Name: {song.name}</div>
        <div>URL: {song.url}</div>
      </div>
      <Link to={`/songs/${song._id}`}>Edit</Link>
   
    </div>
  );
};

export default SongComponent;