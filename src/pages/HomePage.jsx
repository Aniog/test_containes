import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import ProductsPreview from '@/components/home/ProductsPreview'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
