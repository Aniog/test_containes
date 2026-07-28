import ImageLoader from '@/components/site/ImageLoader.jsx'
import HomeHero from '@/components/home/HomeHero.jsx'
import ServicesSection from '@/components/home/ServicesSection.jsx'
import ProcessSection from '@/components/home/ProcessSection.jsx'
import ProductsSection from '@/components/home/ProductsSection.jsx'
import ProblemsTrustSection from '@/components/home/ProblemsTrustSection.jsx'
import CaseStudiesSection from '@/components/home/CaseStudiesSection.jsx'
import FAQSection from '@/components/home/FAQSection.jsx'
import InquirySection from '@/components/home/InquirySection.jsx'

const Home = () => (
  <ImageLoader>
    <main>
      <HomeHero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsTrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </main>
  </ImageLoader>
)

export default Home
