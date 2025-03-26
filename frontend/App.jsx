import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Search } from "./components/Search";
import { Navbar } from "./components/Navbar/Navbar";
import { Title } from "./components/Title/Title";
import { Signup } from "./components/SignUp/Signup";
import { Login } from "./components/Login/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [isLogin, setLogin] = useState(false);

  function Explore() {
    return <Search placeholder="Search for a Course" />;
  }

  function MyCourses() {
    return <h1 style={{textAlign:"center", color:"white"}}>All the courses</h1>;
  }

  function Profile() {
    return <h1 style={{textAlign:"center", color:"white"}}>Profile</h1>;
  } 

  return (
    <BrowserRouter>
      {isLogin ? (
        <>
          <Title />
          <Navbar setLogin={setLogin} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 style={{ textAlign: "center", color: "white" }}>Welcome!</h1>
                  <br />
                  <Search placeholder="Search for a topic" />
                </>
              }
            />
            <Route path="/explore" element={<Explore />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>  
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login setLogin={setLogin} />} />
            <Route path="/signup" element={<Signup setLogin={setLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
