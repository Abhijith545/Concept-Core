import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Search } from './components/search'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Search />
    </>
  )
}

export default App