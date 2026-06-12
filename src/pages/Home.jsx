import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsPreview from '@/components/home/ProductsPreview'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustSection from '@/components/home/TrustSection'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import FAQSection from '@/components/home/FAQSection'
import InquirySection from '@/components/home/InquirySection'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ServicesOverview />
      <ProcessSection />
      <ProductsPreview />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquirySection />
    </div>
  )
}
