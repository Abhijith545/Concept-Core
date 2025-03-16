import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import { Search } from './components/search'
import { Navbar } from './components/Navbar'
import { Title } from './components/Title';
import { Signup } from './components/Signup';
import { Login } from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function Explore() {
    return <>
      <Search placeholder="Search for a Course" />
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
      <Title />
      <Navbar />
      <Routes>
        <Route path="/" index element={<>
          <h1 style={{textAlign: 'center', marginTop: 5,}}>Welcome!</h1><br/>
          <Search placeholder="Search for a topic"/>
        </>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
