import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/home/Header'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/home/ProductsSection'
import EngineeringSection from '@/components/home/EngineeringSection'
import AdvantagesSection from '@/components/home/AdvantagesSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/home/Footer'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50 text-slate-950">
      <Header />
      <HeroSection />
      <ProductsSection />
      <EngineeringSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
