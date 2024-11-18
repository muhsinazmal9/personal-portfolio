import { Route, Routes } from 'react-router-dom';
import './App.css'
import { useState, useEffect } from 'react'
import { Muhsin, Projects, Contact } from './pages/';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Muhsin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      {/* <h1>Theme = {theme}</h1>
      <button type="button" className='bg-blue-500 hover:bg-blue-700 text-white dark:bg-customGray-800 dark:hover:bg-customGray-700 font-bold py-2 px-4 rounded' onClick={handleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} Theme</button> */}
    </>
  )
}

export default App
