import { useStrkImages } from '@/hooks/useStrkImages'
import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { ProductsSection } from '@/components/home/ProductsSection'
import { ProblemsSection } from '@/components/home/ProblemsSection'
import { TrustSection } from '@/components/home/TrustSection'
import { CasesSection } from '@/components/home/CasesSection'
import { FAQSection } from '@/components/home/FAQSection'
import { InquirySection } from '@/components/home/InquirySection'

export default function Home() {
  const containerRef = useStrkImages()

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CasesSection />
      <FAQSection />
      <InquirySection />
    </div>
  )
}
