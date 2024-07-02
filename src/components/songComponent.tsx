import React from 'react';
import { Link } from 'react-router-dom'; 
import Song from '../types/songs';
import Flex from '../styles/flex';
import Button from '../styles/button';

interface SongProps {
  song: Song;
}

const SongComponent: React.FC<SongProps> = ({ song }) => {
  return (
    <Flex gap="5px" flexDirection='column' padding='10px' textAlign='center' borderRadius='15px' background='#36BA98'  minWidth='300px' minHeight='200px'>
       <Flex gap="10px" fontWeight="bold">
      <div>Name: {song.name}</div>
      <div>URL: {song.url}</div>
      <div>Genre:</div>
      <div>Artist: </div>
      <div>Album: </div>
      <div>Release Date: </div>
    </Flex>
      <Link to={`/songs/${song._id}`}><Button buttonColor='#059669' hoverColor='#065f46'> edit</Button></Link>
   
    </Flex>
  );
};

export default SongComponent;