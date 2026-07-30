import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import ProductsSection from '../components/home/ProductsSection'
import TrustSection from '../components/home/TrustSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import FAQSection from '../components/home/FAQSection'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
