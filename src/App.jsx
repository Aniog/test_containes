import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import HeroSection from './components/HeroSection'
import TreeGallery from './components/TreeGallery'
import MicroscopicDetails from './components/MicroscopicDetails'
import EcosystemSection from './components/EcosystemSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
      <HeroSection />
      <TreeGallery />
      <MicroscopicDetails />
      <EcosystemSection />
      <Footer />
    </div>
  )
}

export default App
