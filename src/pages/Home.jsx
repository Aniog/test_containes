import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SiteHeader from '@/components/home/SiteHeader.jsx'
import HeroSection from '@/components/home/HeroSection.jsx'
import ProductShowcase from '@/components/home/ProductShowcase.jsx'
import CapabilitiesSection from '@/components/home/CapabilitiesSection.jsx'
import IndustriesSection from '@/components/home/IndustriesSection.jsx'
import ContactSection from '@/components/home/ContactSection.jsx'
import SiteFooter from '@/components/home/SiteFooter.jsx'

const Home = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <HeroSection />
      <ProductShowcase />
      <CapabilitiesSection />
      <IndustriesSection />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}

export default Home
