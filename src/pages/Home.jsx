import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import ProductsSection from '../components/home/ProductsSection'
import ProblemsSection from '../components/home/ProblemsSection'
import TrustSection from '../components/home/TrustSection'
import CaseStudiesPreview from '../components/home/CaseStudiesPreview'
import FAQSection from '../components/home/FAQSection'
import InquiryForm from '../components/home/InquiryForm'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryForm />
    </div>
  )
}

export default Home
