import { useEffect } from 'react'
import { songsGetStart } from '../redux/slices/songsSlice'
import SongComponent from '../components/songComponent'
import { useAppDispatch, useAppSelector } from '../redux/store/storeHooks'
import { Link } from 'react-router-dom'

function Home() {
const {songs,isLoading}=useAppSelector(state=>state.songs)
const dispatch=useAppDispatch()
useEffect(()=>{
  if(songs.length==0){
    dispatch(songsGetStart())
  }

},[dispatch])
  return (
    
    <div >
    <Link to="/add"><button>Add Song</button></Link>
    {isLoading?(<>loading..</>):( songs.map((song)=>{
    return<SongComponent key={song._id} song={song}/>
  }))}
 
    </div>
  )
}

export default Home
