import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve'
import SourcingProcess from '@/components/home/SourcingProcess'
import ProductsGrid from '@/components/home/ProductsGrid'
import CaseStudyPreview from '@/components/home/CaseStudyPreview'
import Testimonials from '@/components/home/Testimonials'
import FaqSection from '@/components/home/FaqSection'
import InquiryForm from '@/components/home/InquiryForm'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <ProblemsWeSolve />
      <SourcingProcess />
      <ProductsGrid />
      <CaseStudyPreview />
      <Testimonials />
      <FaqSection />
      <InquiryForm />
    </div>
  )
}
