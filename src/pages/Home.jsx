import { useEffect } from "react"
import HomeHero from "@/components/home/HomeHero"
import TrustStrip from "@/components/home/TrustStrip"
import ServicesSection from "@/components/home/ServicesSection"
import ProcessSection from "@/components/home/ProcessSection"
import ProductsSection from "@/components/home/ProductsSection"
import ProblemsSection from "@/components/home/ProblemsSection"
import TrustSection from "@/components/home/TrustSection"
import CaseStudiesSection from "@/components/home/CaseStudiesSection"
import TestimonialSection from "@/components/home/TestimonialSection"
import FaqSection from "@/components/home/FaqSection"
import InquirySection from "@/components/home/InquirySection"

export default function Home() {
  useEffect(() => {
    document.title =
      "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
  }, [])

  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <TestimonialSection />
      <FaqSection />
      <InquirySection />
    </>
  )
}