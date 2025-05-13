import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Profile from './Pages/Profile'



function App() {

  return (
    <>
      <div className="card">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/team" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
