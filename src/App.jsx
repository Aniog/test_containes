import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Header from './components/artitect/Header.jsx'
import HeroSection from './components/artitect/HeroSection.jsx'
import ProductSection from './components/artitect/ProductSection.jsx'
import EngineeringSection from './components/artitect/EngineeringSection.jsx'
import ServiceSection from './components/artitect/ServiceSection.jsx'
import ContactSection from './components/artitect/ContactSection.jsx'
import Footer from './components/artitect/Footer.jsx'
import strkImgConfig from './strk-img-config.json'
import './App.css'

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-artitect-ivory text-artitect-ink">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <EngineeringSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
