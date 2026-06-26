import Hero from '@/components/sections/Hero.jsx'
import ServicesGrid from '@/components/sections/ServicesGrid.jsx'
import ProcessSteps from '@/components/sections/ProcessSteps.jsx'
import ProductsWeSource from '@/components/sections/ProductsWeSource.jsx'
import ProblemsSolved from '@/components/sections/ProblemsSolved.jsx'
import TrustPoints from '@/components/sections/TrustPoints.jsx'
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview.jsx'
import FAQ from '@/components/sections/FAQ.jsx'
import InquiryForm from '@/components/sections/InquiryForm.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessSteps />
      <ProductsWeSource />
      <ProblemsSolved />
      <TrustPoints />
      <CaseStudiesPreview limit={3} />
      <FAQ />
      <InquiryForm />
    </>
  )
}
