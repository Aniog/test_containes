import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Products from './components/sections/Products'
import About from './components/sections/About'
import Features from './components/sections/Features'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
