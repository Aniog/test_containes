import HomeHero from '@/components/home/HomeHero'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustSection from '@/components/home/TrustSection'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </div>
  )
}
