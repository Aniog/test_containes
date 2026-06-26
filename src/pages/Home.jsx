import HeroSection from '@/components/home/HeroSection'
import TrustSection from '@/components/home/TrustSection'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import FAQSection from '@/components/home/FAQSection'
import InquirySection from '@/components/home/InquirySection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
      <CTASection />
    </>
  )
}