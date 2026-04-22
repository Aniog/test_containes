import React from 'react'
import Hero from './components/Hero'
import FeaturedCakes from './components/FeaturedCakes'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Hero />
      <FeaturedCakes />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
