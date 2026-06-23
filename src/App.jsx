import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
         ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen font-sans" ref={containerRef}>
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
