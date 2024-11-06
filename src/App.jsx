import { useState } from 'react'
import './App.css'
import Auth from './pages/Auth'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
