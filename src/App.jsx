import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'
import CapabilitiesSection from './components/CapabilitiesSection.jsx'
import IndustriesSection from './components/IndustriesSection.jsx'
import ProcessSection from './components/ProcessSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import strkImgConfig from './strk-img-config.json'
import './App.css'

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-slate-950">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <CapabilitiesSection />
        <IndustriesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
