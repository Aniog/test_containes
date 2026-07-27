import useDocumentTitle from "@/hooks/useDocumentTitle"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ProcessSection from "@/components/sections/ProcessSection"
import ProductsSection from "@/components/sections/ProductsSection"
import ProblemsSection from "@/components/sections/ProblemsSection"
import TrustSection from "@/components/sections/TrustSection"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import FAQSection from "@/components/sections/FAQSection"
import InquiryFormSection from "@/components/sections/InquiryFormSection"

export default function Home() {
  useDocumentTitle(
    "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
  )

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryFormSection />
    </>
  )
}
