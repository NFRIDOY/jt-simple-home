import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import useAuth from './hooks/useAuth'
import toast from 'react-hot-toast'

function App() {  

  return (
    <>
      <Banner />
    </>
  )
}

export default App
