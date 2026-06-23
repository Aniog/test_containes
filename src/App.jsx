import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import DeepDive from './components/sections/DeepDive'
import Footer from './components/layout/Footer'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Hero />
      <About />
      <Gallery />
      <DeepDive />
      <Footer />
    </div>
  )
}

export default App
