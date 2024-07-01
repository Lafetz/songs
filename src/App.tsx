import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


import Home from './pages/home'
import SongForm from './pages/newSong'
import EditSong from './pages/editSong'
function App() {

  return (
    <Router>

    <Routes>
     
 <Route path="/" element={<Home/>}/>
   <Route path="/add" element={<SongForm/>}/>
   <Route  path="/songs/:id" element={<EditSong />}/>
    </Routes>
   </Router>
  )
}

export default App
