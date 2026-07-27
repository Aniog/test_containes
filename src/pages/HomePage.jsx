import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Search, Shield, ClipboardCheck, Factory, Ship,
  AlertTriangle, DollarSign, Clock, Globe, CheckCircle,
  ArrowRight, Star, Users, Award
} from 'lucide-react'
import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { ProductsSection } from '@/components/home/ProductsSection'
import { ProblemsSection } from '@/components/home/ProblemsSection'
import { TrustSection } from '@/components/home/TrustSection'
import { CaseStudiesSection } from '@/components/home/CaseStudiesSection'
import { FAQSection } from '@/components/home/FAQSection'
import { InquiryForm } from '@/components/home/InquiryForm'

export function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryForm />
    </div>
  )
}
