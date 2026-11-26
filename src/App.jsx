import { useState } from 'react'
import './App.css'

import Hero from "./components/organisms/Hero"
import Header from './components/organisms/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Hero />
    </>
  )
}

export default App
