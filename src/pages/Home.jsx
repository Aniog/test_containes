import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/services/ServicesSection'
import ProcessSection from '@/components/process/ProcessSection'
import ProductsSection from '@/components/products/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustSection from '@/components/home/TrustSection'
import CaseStudiesSection from '@/components/cases/CaseStudiesSection'
import FAQSection from '@/components/home/FAQSection'
import InquiryForm from '@/components/contact/InquiryForm'
import FinalCTASection from '@/components/home/FinalCTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryForm />
      <FinalCTASection />
    </main>
  )
}
