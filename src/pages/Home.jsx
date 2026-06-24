import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/home/Header'
import HeroSection from '@/components/home/HeroSection'
import ProductShowcase from '@/components/home/ProductShowcase'
import AdvantagesSection from '@/components/home/AdvantagesSection'
import ProcessSection from '@/components/home/ProcessSection'
import SpecificationsSection from '@/components/home/SpecificationsSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/home/Footer'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
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
        <AdvantagesSection />
        <ProcessSection />
        <SpecificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
