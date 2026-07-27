import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection.jsx'
import ServicesSection from '@/components/home/ServicesSection.jsx'
import ProcessSection from '@/components/home/ProcessSection.jsx'
import ProductsSection from '@/components/home/ProductsSection.jsx'
import ProblemsSection from '@/components/home/ProblemsSection.jsx'
import TrustSection from '@/components/home/TrustSection.jsx'
import CaseStudiesSection from '@/components/home/CaseStudiesSection.jsx'
import FAQSection from '@/components/home/FAQSection.jsx'
import InquirySection from '@/components/home/InquirySection.jsx'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </div>
  )
}
