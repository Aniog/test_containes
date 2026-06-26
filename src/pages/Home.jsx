import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import TrustSection from '@/components/home/TrustSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import FAQSection from '@/components/home/FAQSection'
import InquiryCTA from '@/components/home/InquiryCTA'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryCTA />
    </div>
  )
}
