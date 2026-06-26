import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsWeSource from '@/components/home/ProductsWeSource'
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import FAQ from '@/components/home/FAQ'
import InquirySection from '@/components/home/InquirySection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ProcessSection />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <FAQ />
      <InquirySection />
    </>
  )
}
