import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import CapabilitySection from './components/home/CapabilitySection'
import ContactSection from './components/home/ContactSection'
import HomeFooter from './components/home/HomeFooter'
import HomeHeader from './components/home/HomeHeader'
import HomeHero from './components/home/HomeHero'
import ProcessSection from './components/home/ProcessSection'
import ProductGrid from './components/home/ProductGrid'
import strkImgConfig from './strk-img-config.json'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950">
      <HomeHeader />
      <main>
        <HomeHero />
        <ProductGrid />
        <CapabilitySection />
        <ProcessSection />
        <ContactSection />
      </main>
      <HomeFooter />
    </div>
  )
}

export default App
