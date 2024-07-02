import { useEffect } from 'react'
import { songsGetStart } from '../redux/slices/songsSlice'
import SongComponent from '../components/songComponent'
import { useAppDispatch, useAppSelector } from '../redux/store/storeHooks'
import { Link } from 'react-router-dom'
import Flex from '../styles/flex'

import Button from '../styles/button'
import Loading from '../styles/loading'

function Home() {
const {songs,isLoading}=useAppSelector(state=>state.songs)
const dispatch=useAppDispatch()
useEffect(()=>{
  if(songs.length==0){
    dispatch(songsGetStart())
  }
},[dispatch])
  return (
    <Flex padding='15px 0 0 0' gap='40px' flexDirection='column' width='100%' min-height='100vh' alignItems='center' >
    {isLoading?(<Loading />):(<><Link to="/add"><Button >Add Song</Button></Link> <Flex gap="15px">{ songs.map((song)=>{
    return<SongComponent key={song._id} song={song}/>
  })}
  </Flex></>)}
  
    </Flex>
  )
}

export default Home
