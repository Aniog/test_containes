import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'
import Header from './components/home/Header.jsx'
import HeroSection from './components/home/HeroSection.jsx'
import ProductSection from './components/home/ProductSection.jsx'
import AdvantageSection from './components/home/AdvantageSection.jsx'
import ApplicationSection from './components/home/ApplicationSection.jsx'
import ContactSection from './components/home/ContactSection.jsx'
import Footer from './components/home/Footer.jsx'

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-ivory text-graphite">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <AdvantageSection />
        <ApplicationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
