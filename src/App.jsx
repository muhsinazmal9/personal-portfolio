import { Route, Routes } from 'react-router-dom';
import './App.css'
import { useState, useEffect } from 'react'
import { Muhsin, Projects, Contact } from './pages/';

function App() {

  // Initialize theme state based on local storage or system preference
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Toggle theme between light and dark
  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Update local storage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

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
