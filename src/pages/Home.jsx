import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessSteps from '@/components/home/ProcessSteps'
import ProductsGrid from '@/components/home/ProductsGrid'
import ProblemsSolved from '@/components/home/ProblemsSolved'
import WhyUs from '@/components/home/WhyUs'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import HomeFaq from '@/components/home/HomeFaq'
import InquirySection from '@/components/home/InquirySection'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />
      <ServicesOverview />
      <ProcessSteps />
      <ProductsGrid />
      <ProblemsSolved />
      <WhyUs />
      <CaseStudiesPreview />
      <HomeFaq />
      <InquirySection />
    </div>
  )
}

export default Home
