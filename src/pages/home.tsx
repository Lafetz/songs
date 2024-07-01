
import Song from '../types/songs'

import { useEffect } from 'react'
import { songsGetStart } from '../redux/slices/songsSlice'
import SongComponent from '../components/songComponent'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'

function Home() {
const songs:Song[]=useAppSelector(state=>state.songs.songs)
const dispatch=useAppDispatch()
useEffect(()=>{
dispatch(songsGetStart())
},[dispatch])
  return (
    <>
  {songs.map((song)=>{
    return<SongComponent key={song._id} song={song}/>
  })}
    </>
  )
}

export default Home
