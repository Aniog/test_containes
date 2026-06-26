import Hero from "@/components/home/Hero"
import TrustSection from "@/components/sections/TrustSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ProcessSection from "@/components/sections/ProcessSection"
import ProductsSection from "@/components/sections/ProductsSection"
import ProblemsSection from "@/components/sections/ProblemsSection"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import FaqSection from "@/components/sections/FaqSection"
import CtaSection from "@/components/sections/CtaSection"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection limit={3} />
      <FaqSection />
      <CtaSection />
    </>
  )
}
