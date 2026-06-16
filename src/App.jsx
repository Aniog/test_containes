import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import strkImgConfig from './strk-img-config.json'
import HeroSection from './components/home/HeroSection.jsx'
import ProductShowcase from './components/home/ProductShowcase.jsx'
import CapabilitiesSection from './components/home/CapabilitiesSection.jsx'
import ProcessSection from './components/home/ProcessSection.jsx'
import ContactSection from './components/home/ContactSection.jsx'

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="min-h-screen bg-slate-50 text-slate-950">
      <HeroSection />
      <ProductShowcase />
      <CapabilitiesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  )
}

export default App
