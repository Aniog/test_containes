import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Initial scan and load
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="bg-stone-950 text-white min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      <Hero />
      <Gallery />
      <Features />
      <Footer />
    </div>
  )
}

export default App

