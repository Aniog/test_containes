import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessSteps from '@/components/home/ProcessSteps'
import ProductCategories from '@/components/home/ProductCategories'
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve'
import TrustPoints from '@/components/home/TrustPoints'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import FAQ from '@/components/home/FAQ'
import InquiryForm from '@/components/home/InquiryForm'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessSteps />
      <ProductCategories />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquiryForm />
    </>
  )
}
