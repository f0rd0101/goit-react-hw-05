import HomePage from './pages/HomePage/HomePage'
import './App.css'
import {Routes,Route} from 'react-router-dom'
export const baseImgUrl = "https://image.tmdb.org/t/p/w500/";
function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
     </Routes>
    </>
  )
}

export default App
