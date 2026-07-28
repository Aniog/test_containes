import HomeHero from '@/components/home/HomeHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProcessSection from '@/components/sections/ProcessSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ProblemsTrustSection from '@/components/sections/ProblemsTrustSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import FaqSection from '@/components/sections/FaqSection'
import InquirySection from '@/components/sections/InquirySection'

const Home = () => (
  <main>
    <HomeHero />
    <ServicesGrid />
    <ProcessSection />
    <ProductsSection />
    <ProblemsTrustSection />
    <CaseStudiesSection />
    <FaqSection />
    <InquirySection />
  </main>
)

export default Home
