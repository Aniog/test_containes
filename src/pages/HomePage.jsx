import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustPointsSection from '@/components/home/TrustPointsSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import FAQSection from '@/components/home/FAQSection'
import InquirySection from '@/components/home/InquirySection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustPointsSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </div>
  )
}

export default HomePage
