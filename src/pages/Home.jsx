import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '../components/home/HeroSection'
import ServicesOverview from '../components/home/ServicesOverview'
import ProcessOverview from '../components/home/ProcessOverview'
import ProductsOverview from '../components/home/ProductsOverview'
import ProblemsWeSolve from '../components/home/ProblemsWeSolve'
import TrustPoints from '../components/home/TrustPoints'
import CaseStudiesPreview from '../components/home/CaseStudiesPreview'
import FAQ from '../components/home/FAQ'
import InquiryForm from '../components/shared/InquiryForm'

const Home = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <HeroSection />
      <ServicesOverview />
      <ProcessOverview />
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
