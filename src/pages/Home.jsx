import HeroSection from '@/components/home/HeroSection.jsx'
import ServicesSection from '@/components/home/ServicesSection.jsx'
import ProcessSection from '@/components/home/ProcessSection.jsx'
import ProductsSection from '@/components/home/ProductsSection.jsx'
import ProblemsTrustSection from '@/components/home/ProblemsTrustSection.jsx'
import CaseStudiesSection from '@/components/home/CaseStudiesSection.jsx'
import FaqSection from '@/components/home/FaqSection.jsx'
import InquiryFormSection from '@/components/home/InquiryFormSection.jsx'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection compact />
      <ProcessSection />
      <ProductsSection />
      <ProblemsTrustSection />
      <CaseStudiesSection limit={3} />
      <FaqSection />
      <InquiryFormSection />
    </main>
  )
}
