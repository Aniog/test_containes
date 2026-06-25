import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import HeroSection from './components/HeroSection.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'
import PrecisionSection from './components/PrecisionSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import './App.css'

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main id="top" ref={pageRef} className="min-h-screen bg-slate-50 text-slate-950">
      <HeroSection />
      <ProductShowcase />
      <PrecisionSection />
      <ContactSection />
    </main>
  )
}

export default App
