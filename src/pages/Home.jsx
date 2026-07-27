import HeroSection from "@/components/home/HeroSection"
import ServicesSection from "@/components/home/ServicesSection"
import ProcessSection from "@/components/home/ProcessSection"
import ProductsSection from "@/components/home/ProductsSection"
import ProblemsSection from "@/components/home/ProblemsSection"
import TrustSection from "@/components/home/TrustSection"
import CasesSection from "@/components/home/CasesSection"
import FAQSection from "@/components/home/FAQSection"
import InquiryCTASection from "@/components/home/InquiryCTASection"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    document.title = "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
  }, [])

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CasesSection />
      <FAQSection />
      <InquiryCTASection />
    </>
  )
}
