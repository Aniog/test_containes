import * as React from "react"
import { useImageLoader } from "@/hooks/useImageLoader"
import Hero from "@/components/home/Hero"
import ServicesSection from "@/components/home/ServicesSection"
import ProcessSection from "@/components/home/ProcessSection"
import ProductsSection from "@/components/home/ProductsSection"
import ProblemsSection from "@/components/home/ProblemsSection"
import TrustSection from "@/components/home/TrustSection"
import CaseStudiesSection from "@/components/home/CaseStudiesSection"
import FAQSection from "@/components/home/FAQSection"
import CTASection from "@/components/home/CTASection"

export default function Home() {
  const containerRef = useImageLoader()

  return (
    <div ref={containerRef}>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
