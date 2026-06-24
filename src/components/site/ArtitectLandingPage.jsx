import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import ProductShowcase from './ProductShowcase.jsx'
import AdvantagesSection from './AdvantagesSection.jsx'
import ProcessSection from './ProcessSection.jsx'
import ContactSection from './ContactSection.jsx'
import Footer from './Footer.jsx'
import strkImgConfig from '../../strk-img-config.json'

function ArtitectLandingPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-950 font-sans text-slate-950">
      <Header />
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

export default ArtitectLandingPage
