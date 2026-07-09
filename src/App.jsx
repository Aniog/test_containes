import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import GallerySection from '@/components/GallerySection'
import WorldSection from '@/components/WorldSection'
import FactsSection from '@/components/FactsSection'
import ExploreSection from '@/components/ExploreSection'
import Footer from '@/components/Footer'

function App() {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a1a] text-gray-200 font-body">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <AboutSection />
      <GallerySection />
      <WorldSection />
      <FactsSection />
      <ExploreSection />
      <Footer />
    </div>
  )
}

export default App
