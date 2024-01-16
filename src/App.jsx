import { useState } from 'react'
import './App.css'
import Banner from './container/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Timeline from './components/Timeline/Timeline'
import WoodenBoard from './Wood/WoodenBoard'
import Back from './BG/Back'

function App() {

  return (
    <>
     <Navbar />
     <Banner />      
     <Back/>
     <Timeline />
    </>
  )
}

export default App
