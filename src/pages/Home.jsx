import { useEffect } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ProcessSection } from '@/components/ProcessSection'
import { ProductsSection } from '@/components/ProductsSection'
import { ProblemsSection } from '@/components/ProblemsSection'
import { TrustSection } from '@/components/TrustSection'
import { CaseStudiesSection } from '@/components/CaseStudiesSection'
import { FAQSection } from '@/components/FAQSection'
import { InquiryForm } from '@/components/InquiryForm'

const pageTitle = 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China'

export default function Home() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryForm />
    </>
  )
}
