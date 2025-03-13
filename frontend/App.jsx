import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import { Search } from './components/search'
import { Navbar } from './components/Navbar'

function App() {
  function Explore() {
    return <>
      <input placeholder='search for a course'></input>
      <button>search</button>
    </>
  }
  function MyCourses() {
    return <>
      <h1>All the courses</h1>
    </>
  }
  function Profile() {
    return <>
      <h1>Profile</h1>
    </>
  }
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<>
          <h1 style={{textAlign: 'center', marginTop: 5,}}>Welcome!</h1><br/>
          <Search />
        </>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
