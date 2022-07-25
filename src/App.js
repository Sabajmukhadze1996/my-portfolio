import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutMe } from './components/AboutMe';
import { MySkills } from './components/MySkills';
import { Footer } from './components/Footer';
import { MyProjects } from './components/MyProjects';




const App = () =>  {
  useEffect(() => {
    window.onload = window.scrollTo(0, 0);
  }, [])
    return (
<BrowserRouter>
  <div className="app">
    <Navbar /> 
   <main id="main">
    <Routes>
      <Route path="/*" element={<HomePage />}/>
      <Route path="/about-me" element={<AboutMe /> }/>
      <Route path="/my-skills" element={<MySkills /> }/>
      <Route path="/my-projects" element={<MyProjects /> }/>
    </Routes>
   </main>
    <Footer />
  </div>
</BrowserRouter>
    )
}

export default App;
