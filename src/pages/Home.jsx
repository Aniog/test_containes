import HomeHero from '@/components/sections/HomeHero'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ProblemsSection from '@/components/sections/ProblemsSection'
import TrustSection from '@/components/sections/TrustSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import FaqSection from '@/components/sections/FaqSection'
import InquiryForm from '@/components/sections/InquiryForm'
import CtaBanner from '@/components/CtaBanner'

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection preview />
      <FaqSection />
      <CtaBanner />
      <InquiryForm />
    </>
  )
}
