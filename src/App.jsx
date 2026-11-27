import { useState } from 'react'
import './App.css'

import Hero from "./components/organisms/Hero"
import Header from './components/organisms/Header'
import TripList from './components/organisms/TripList'
import Footer from './components/organisms/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Hero />
      <TripList />
      <Footer />
    </>
  )
}

export default App
