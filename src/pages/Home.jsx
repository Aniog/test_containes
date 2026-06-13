import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection'
import ProductsPreview from '@/components/home/ProductsPreview'
import FeaturesSection from '@/components/home/FeaturesSection'
import AboutPreview from '@/components/home/AboutPreview'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <AboutPreview />
      <CTASection />
    </div>
  )
}
