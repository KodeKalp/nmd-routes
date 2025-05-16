import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Profile from './Pages/Profile'
import Header from './Components/Header';
import Blog from './Pages/Blog';



function App() {

  return (
    <>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/team" element={<Profile/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
