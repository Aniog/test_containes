import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import SourcingProcess from '@/components/home/SourcingProcess'
import ProductsWeSource from '@/components/home/ProductsWeSource'
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve'
import TrustPoints from '@/components/home/TrustPoints'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import FAQ from '@/components/home/FAQ'
import InquiryCTA from '@/components/home/InquiryCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquiryCTA />
    </>
  )
}
