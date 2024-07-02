import React, { useEffect, useState } from 'react';
import { songsAddRequest } from '../redux/slices/songsSlice';
import BackBtn from '../components/backBtn';
import Flex from '../styles/flex';
import Input from '../styles/input';
import Button, { LoadingBtn } from '../styles/button';
import { useAppDispatch, useAppSelector } from '../redux/store/storeHooks';

interface SongForm {
  name: string;
  url: string;
  genre: string;
  artist: string;
  album: string;
  releaseDate: string;
}
const Form = Flex.withComponent('form')
const SongForm: React.FC = () => {
  const {isLoading}=useAppSelector(state=>state.songs)
  const dispatch = useAppDispatch();
  const [newSong, setNewSong] = useState<SongForm>({
    name: '',
    url: '',
    genre: '',      
    artist: '',
    album: '',
    releaseDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSong({ ...newSong, [name]: value });
  };

  const handleAddSong = (e:any) => {
e.preventDefault()
    dispatch(songsAddRequest(newSong));
    

  };
useEffect(()=>{
  if(!isLoading){
    setNewSong({
      name: '',
      url: '',
      genre: '',      
      artist: '',
      album: '',
      releaseDate: ''
    });
  }

},[isLoading])
  return (
<Flex padding='10px 0px 0px 0px' justifyContent='flex-start' gap="5px" flexDirection='column' width='100%' height='100vh'>
      <BackBtn />
      <h2>Add New Song</h2>
      <Form onSubmit={handleAddSong} flexDirection='column' gap="15px" maxWidth='300px'>
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={newSong.name}
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
            value={newSong.url}
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
            value={newSong.genre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <Input
            type="text"
            id="artist"
            name="artist"
            value={newSong.artist}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="album">Album:</label>
          <Input
            type="text"
            id="album"
            name="album"
            value={newSong.album}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="releaseDate">Release Date:</label>
          <Input
            type="text"
            id="releaseDate"
            name="releaseDate"
            value={newSong.releaseDate}
            onChange={handleInputChange}
          />
        </div>
        {
          isLoading? <LoadingBtn></LoadingBtn>: <Button type="submit">Add Song</Button>
        }
      
       
      </Form>
    </Flex>
  );
};

export default SongForm;