import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import strkImgConfig from './strk-img-config.json'
import AdvantagesSection from './components/home/AdvantagesSection'
import ContactSection from './components/home/ContactSection'
import HeroSection from './components/home/HeroSection'
import ProcessSection from './components/home/ProcessSection'
import ProductsSection from './components/home/ProductsSection'
import SiteFooter from './components/home/SiteFooter'
import StatsStrip from './components/home/StatsStrip'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50 text-slate-950">
      <HeroSection />
      <StatsStrip />
      <ProductsSection />
      <AdvantagesSection />
      <ProcessSection />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}

export default App
