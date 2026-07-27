import BlogPreview from '@/components/home/BlogPreview'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import FAQSection from '@/components/home/FAQSection'
import HeroSection from '@/components/home/HeroSection'
import InquirySection from '@/components/home/InquirySection'
import ProblemsSection from '@/components/home/ProblemsSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import TrustSection from '@/components/home/TrustSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview compact />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <BlogPreview />
      <InquirySection />
    </>
  )
}
