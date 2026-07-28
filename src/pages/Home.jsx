import { HeroSection } from "@/components/home/HeroSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { ProductsSection } from "@/components/home/ProductsSection"
import { ProblemsSection } from "@/components/home/ProblemsSection"
import { TrustSection } from "@/components/home/TrustSection"
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection"
import { FaqSection } from "@/components/home/FaqSection"
import { InquirySection } from "@/components/home/InquirySection"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"

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
      <FaqSection />
      <InquirySection />
    </>
  )
}
