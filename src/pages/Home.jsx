import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import ProcessSection from '../components/home/ProcessSection'
import ProductsWeSource from '../components/home/ProductsWeSource'
import ProblemsSolved from '../components/home/ProblemsSolved'
import TrustPoints from '../components/home/TrustPoints'
import CaseStudies from '../components/home/CaseStudies'
import FAQSection from '../components/home/FAQSection'
import InquirySection from '../components/home/InquirySection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessSection />
      <ProductsWeSource />
      <ProblemsSolved />
      <TrustPoints />
      <CaseStudies limit={3} />
      <FAQSection />
      <InquirySection sourcePage="home" />
    </>
  )
}
