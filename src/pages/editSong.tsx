import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { songsDeleteStart, songsUpdateStart } from '../redux/slices/songsSlice';
import Song from '../types/songs';
import BackBtn from '../components/backBtn';
import Flex from '../styles/flex';
import Button, { LoadingBtn } from '../styles/button';
import Input from '../styles/input';
import { useAppSelector } from '../redux/store/storeHooks';

const Form = Flex.withComponent('form')
const EditSong: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
const navigate=useNavigate()
  const {isLoading}=useAppSelector(state=>state.songs)
  const songs = useSelector((state: RootState) => state.songs.songs);
  const [editedSong, setEditedSong] = useState<Song | null>(null);
  

  const handleDelete = () => {
    if(!editedSong){
      return
    }
    if (window.confirm(`Are you sure you want to delete ${editedSong.name}?`)) {
      dispatch(songsDeleteStart(editedSong._id));
      navigate("/")
    }
  };



  useEffect(() => {
    const song = songs.find((song) => song._id === id);
    if (song) {
      setEditedSong({ ...song });
    } else {

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
    <Flex padding='10px 0px 0px 0px' justifyContent='flex-start' gap="15px" flexDirection='column' width='100%' height='100vh'>
      <BackBtn />
      <Flex flexDirection='row' gap="55px"><h2>Edit Song</h2>
      {
          isLoading? <LoadingBtn buttonColor='#dc2626' hoverColor='#7f1d1d'></LoadingBtn>:      <Button onClick={handleDelete} buttonColor='#dc2626' hoverColor='#7f1d1d'>Delete</Button>
        }
  </Flex>
      <Form onSubmit={handleSave} flexDirection='column' gap="15px" maxWidth='300px'>
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={editedSong.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="url">URL:</label>
          <Input
            type="text"
            id="url"
            name="url"
            value={editedSong.url}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <Input
            type="text"
            id="genre"
            name="genre"
            value={editedSong.genre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <Input
            type="text"
            id="artist"
            name="artist"
            value={editedSong.artist}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="album">Album:</label>
          <Input
            type="text"
            id="album"
            name="album"
            value={editedSong.album}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="releaseDate">Release Date:</label>
          <Input
            type="text"
            id="releaseDate"
            name="releaseDate"
            value={editedSong.releaseDate}
            onChange={handleInputChange}
          />
        </div>
        {
          isLoading? <LoadingBtn></LoadingBtn>: <Button type="submit" buttonColor='#059669' hoverColor='#065f46'>Save</Button>
        }
        
      </Form>
    </Flex>
  );
};

export default EditSong;
