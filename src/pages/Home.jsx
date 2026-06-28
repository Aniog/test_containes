import Hero from "@/components/home/Hero"
import TrustPoints from "@/components/home/TrustPoints"
import ServicesPreview from "@/components/home/ServicesPreview"
import ProcessPreview from "@/components/home/ProcessPreview"
import ProductsPreview from "@/components/home/ProductsPreview"
import ProblemsWeSolve from "@/components/home/ProblemsWeSolve"
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview"
import Faq from "@/components/shared/Faq"
import CtaBand from "@/components/shared/CtaBand"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustPoints />
      <ServicesPreview />
      <ProcessPreview />
      <ProductsPreview />
      <ProblemsWeSolve />
      <CaseStudiesPreview />
      <Faq />
      <CtaBand />
    </>
  )
}
