import Hero from "@/components/sections/Hero"
import ServicesSection from "@/components/sections/ServicesSection"
import ProcessSection from "@/components/sections/ProcessSection"
import ProductsSection from "@/components/sections/ProductsSection"
import ProblemsSection from "@/components/sections/ProblemsSection"
import TrustSection from "@/components/sections/TrustSection"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import FAQSection from "@/components/sections/FAQSection"
import InquirySection from "@/components/sections/InquirySection"
import CTASection from "@/components/sections/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
      <CTASection />
    </>
  )
}
