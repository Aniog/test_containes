import { useEffect, useRef } from 'react'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/home/ProductsSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ContactCTA from '@/components/home/ContactCTA'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      <ContactCTA />
    </div>
  )
}
