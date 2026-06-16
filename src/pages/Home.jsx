import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/home/HeroSection'
import ProductSection from '../components/home/ProductSection'
import AdvantageSection from '../components/home/AdvantageSection'
import ProcessSection from '../components/home/ProcessSection'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <AdvantageSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
