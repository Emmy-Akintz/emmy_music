import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home'
import Search from './pages/search'
import Library from './pages/library'
import Profile from './pages/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-info'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/library' element={<Library />}></Route>
          <Route path='/' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
