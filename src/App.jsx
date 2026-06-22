import './App.css'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import GallerySection from './components/GallerySection'
import OrganismsSection from './components/OrganismsSection'
import EnvironmentsSection from './components/EnvironmentsSection'
import FactsSection from './components/FactsSection'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    try {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      return cleanup
    } catch (e) {
      console.log('ImageHelper init:', e)
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-cosmos-dark text-gray-200 font-body">
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <OrganismsSection />
      <EnvironmentsSection />
      <FactsSection />
      <Footer />
    </div>
  )
}

export default App
