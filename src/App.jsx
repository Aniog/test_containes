import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Discover from './components/Discover'
import Inhabitants from './components/Inhabitants'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <Discover />
      <Inhabitants />
      <Gallery />
      <Footer />
    </main>
  )
}

export default App
