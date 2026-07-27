import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServicesOverview from '../components/home/ServicesOverview'
import SourcingProcess from '../components/home/SourcingProcess'
import ProductsWeSource from '../components/home/ProductsWeSource'
import ProblemsWeSolve from '../components/home/ProblemsWeSolve'
import TrustPoints from '../components/home/TrustPoints'
import CaseStudiesPreview from '../components/home/CaseStudiesPreview'
import FAQSection from '../components/home/FAQSection'
import InquiryCTA from '../components/home/InquiryCTA'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryCTA />
    </div>
  )
}
