import Hero from "@/components/home/Hero"
import ServicesOverview from "@/components/home/ServicesOverview"
import ProcessOverview from "@/components/home/ProcessOverview"
import ProductsOverview from "@/components/home/ProductsOverview"
import ProblemsSection from "@/components/home/ProblemsSection"
import TrustSection from "@/components/home/TrustSection"
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview"
import FAQSection from "@/components/home/FAQSection"
import InquiryCTASection from "@/components/home/InquiryCTASection"

export function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessOverview />
      <ProductsOverview />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryCTASection />
    </>
  )
}

export default Home
