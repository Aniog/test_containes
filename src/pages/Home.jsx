import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustPointsSection from '@/components/home/TrustPointsSection'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import FAQSection from '@/components/home/FAQSection'
import CTABand from '@/components/home/CTABand'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustPointsSection />
      <CaseStudiesPreview />
      <FAQSection />
      <CTABand />
    </div>
  )
}
