import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsTrustSection from '@/components/home/ProblemsTrustSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import FaqSection from '@/components/home/FaqSection'
import InquirySection from '@/components/home/InquirySection'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <HomeHero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsTrustSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquirySection />
    </main>
  )
}

export default Home
