import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { songsAddRequest, songsAddStart } from '../redux/slices/songsSlice';
import BackBtn from '../components/backBtn';

interface SongForm{
    name:string,
    url:string
}

const SongForm: React.FC = () => {
  const dispatch = useDispatch();
  const [newSong, setNewSong] = useState<SongForm>({
    name: '',
    url: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSong({ ...newSong, [name]: value });
  };

  const handleAddSong = () => {
    dispatch(songsAddRequest(newSong));
    setNewSong({  name: '', url: '' }); 
  };

  return (
    <div>
      <BackBtn/>
      <h2>Add New Song</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newSong.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        URL:
        <input
          type="text"
          name="url"
          value={newSong.url}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
};

export default SongForm;