import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SiteHeader from '@/components/home/SiteHeader'
import HeroSection from '@/components/home/HeroSection'
import ProductShowcase from '@/components/home/ProductShowcase'
import AdvantagesSection from '@/components/home/AdvantagesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/home/Footer'
import './App.css'

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-steel-50 text-machine-900">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductShowcase />
        <AdvantagesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
