import Hero from "@/components/sections/Hero"
import TrustBar from "@/components/sections/TrustBar"
import ServicesOverview from "@/components/sections/ServicesOverview"
import ProcessOverview from "@/components/sections/ProcessOverview"
import ProductsOverview from "@/components/sections/ProductsOverview"
import Problems from "@/components/sections/Problems"
import TrustPoints from "@/components/sections/TrustPoints"
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview"
import Faq from "@/components/sections/Faq"
import InquiryCta from "@/components/sections/InquiryCta"
import CtaBanner from "@/components/shared/CtaBanner"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <ProcessOverview />
      <ProductsOverview />
      <Problems />
      <TrustPoints />
      <CaseStudiesPreview />
      <Faq limit={6} />
      <InquiryCta />
      <CtaBanner />
    </>
  )
}
