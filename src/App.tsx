import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


import Home from './pages/home'
import SongForm from './pages/newSong'




function App() {

  return (
    <Router>

    <Routes>
     
 <Route path="/" element={<Home/>}/>
   <Route path="/add" element={<SongForm/>}/>
    </Routes>
   </Router>
  )
}

export default App
