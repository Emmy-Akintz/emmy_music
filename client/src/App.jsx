import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import home from './pages/home'
import search from './pages/search'
import library from './pages/library'
import profile from './pages/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<home />}></Route>
          <Route path='/search' element={<search />}></Route>
          <Route path='/library' element={<library />}></Route>
          <Route path='/' element={<profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
