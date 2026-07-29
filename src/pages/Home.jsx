import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProcessSection from '../components/sections/ProcessSection'
import ProductsSection from '../components/sections/ProductsSection'
import ProblemsSection from '../components/sections/ProblemsSection'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import FaqSection from '../components/sections/FaqSection'
import BlogSection from '../components/sections/BlogSection'
import InquirySection from '../components/sections/InquirySection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection compact />
      <ProcessSection />
      <ProductsSection compact />
      <ProblemsSection />
      <CaseStudiesSection />
      <FaqSection />
      <BlogSection />
      <InquirySection />
    </main>
  )
}
