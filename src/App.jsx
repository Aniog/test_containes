import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Wonders from './components/home/Wonders'
import Gallery from './components/home/Gallery'
import MacroLife from './components/home/MacroLife'
import Footer from './components/layout/Footer'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Initial scan
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="bg-slate-900 min-h-screen font-['Inter']">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Wonders />
        <MacroLife />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
