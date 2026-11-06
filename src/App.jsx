import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import AirtagTable from './components/AirtagTable'
import bikes from './data/airtagdata'
import './App.css'

function App() {

  return (
    <>
      <Header text = "Bikeshare Admin: Airtags"></Header>
      <AirtagTable bikesList = {bikes}></AirtagTable>
    </>
  )
}

export default App
