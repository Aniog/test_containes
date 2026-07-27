import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import ProblemsSection from '../components/home/ProblemsSection'
import TrustSection from '../components/home/TrustSection'
import CaseStudiesHighlight from '../components/home/CaseStudiesHighlight'
import FAQSection from '../components/home/FAQSection'
import ContactCTA from '../components/home/ContactCTA'

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
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesHighlight />
      <FAQSection />
      <ContactCTA />
    </div>
  )
}
