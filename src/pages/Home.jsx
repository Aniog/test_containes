import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import SourcingProcess from '@/components/home/SourcingProcess'
import ProductsOverview from '@/components/home/ProductsOverview'
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve'
import TrustPoints from '@/components/home/TrustPoints'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import FAQ from '@/components/home/FAQ'
import InquiryForm from '@/components/home/InquiryForm'

const Home = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <HeroSection />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsOverview />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquiryForm />
    </div>
  )
}

export default Home
