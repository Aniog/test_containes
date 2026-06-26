import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '../components/home/HeroSection'
import ServicesOverview from '../components/home/ServicesOverview'
import SourcingProcess from '../components/home/SourcingProcess'
import ProductsWeSource from '../components/home/ProductsWeSource'
import ProblemsWeSolve from '../components/home/ProblemsWeSolve'
import TrustPoints from '../components/home/TrustPoints'
import CaseStudiesPreview from '../components/home/CaseStudiesPreview'
import FAQSection from '../components/home/FAQSection'
import InquiryForm from '../components/shared/InquiryForm'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryForm />
    </div>
  )
}
