import HomeHero from '@/components/home/HomeHero'
import StatsBar from '@/components/home/StatsBar'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustSection from '@/components/home/TrustSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import FaqSection from '@/components/home/FaqSection'
import InquirySection from '@/components/home/InquirySection'

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquirySection />
    </>
  )
}
