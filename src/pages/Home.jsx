import Hero from "../components/home/Hero"
import ServicesOverview from "../components/home/ServicesOverview"
import ProcessSection from "../components/home/ProcessSection"
import ProductsSection from "../components/home/ProductsSection"
import ProblemsSection from "../components/home/ProblemsSection"
import TrustSection from "../components/home/TrustSection"
import CaseStudiesSection from "../components/home/CaseStudiesSection"
import FAQSection from "../components/home/FAQSection"
import InquirySection from "../components/home/InquirySection"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </>
  )
}
