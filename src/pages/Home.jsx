import HomeHero from '@/components/home/HomeHero'
import {
  CaseStudyPreview,
  FaqPreview,
  InquirySection,
  ProblemsWeSolve,
  ProcessOverview,
  ProductShowcase,
  ServiceGrid,
  TrustPoints,
} from '@/components/home/HomeSections'

function Home() {
  return (
    <>
      <HomeHero />
      <ServiceGrid />
      <ProcessOverview />
      <ProductShowcase />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudyPreview />
      <FaqPreview />
      <InquirySection />
    </>
  )
}

export default Home
