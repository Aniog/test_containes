import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Gallery />
      <Features />
      <Footer />
    </div>
  )
}

export default App
