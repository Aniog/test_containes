import React from 'react'
import HeroSection from '../components/home/HeroSection.jsx'
import ServicesOverview from '../components/home/ServicesOverview.jsx'
import ProcessSection from '../components/home/ProcessSection.jsx'
import ProductsSection from '../components/home/ProductsSection.jsx'
import ProblemsSection from '../components/home/ProblemsSection.jsx'
import TrustSection from '../components/home/TrustSection.jsx'
import CaseStudiesPreview from '../components/home/CaseStudiesPreview.jsx'
import FAQSection from '../components/home/FAQSection.jsx'
import CTASection from '../components/home/CTASection.jsx'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default Home
