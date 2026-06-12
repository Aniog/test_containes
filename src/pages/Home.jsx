import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import SourcingProcess from '@/components/sections/SourcingProcess'
import ProductsGrid from '@/components/sections/ProductsGrid'
import ProblemsWeSolve from '@/components/sections/ProblemsWeSolve'
import TrustPoints from '@/components/sections/TrustPoints'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import FAQ from '@/components/sections/FAQ'
import InquiryForm from '@/components/sections/InquiryForm'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <SourcingProcess />
      <ProductsGrid />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesSection />
      <FAQ />
      <InquiryForm variant="home" />
      <CTASection />
    </>
  )
}
