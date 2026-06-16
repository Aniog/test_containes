import React from 'react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProductsSection from '@/components/sections/ProductsSection'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaBannerSection from '@/components/sections/CtaBannerSection'
import QuoteSection from '@/components/sections/QuoteSection'
import FaqSection from '@/components/sections/FaqSection'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBannerSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
