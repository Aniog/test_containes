import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'

// Import components
import HeroSection from './components/HeroSection'
import TreeGallery from './components/TreeGallery'
import MicroscopicWorld from './components/MicroscopicWorld'
import EcosystemSection from './components/EcosystemSection'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-soft-cream" ref={containerRef}>
      <HeroSection />
      <TreeGallery />
      <MicroscopicWorld />
      <EcosystemSection />
      <Footer />
    </div>
  )
}

export default App
