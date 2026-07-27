import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import Process from "@/components/sections/Process"
import Products from "@/components/sections/Products"
import Problems from "@/components/sections/Problems"
import TrustPoints from "@/components/sections/TrustPoints"
import CaseStudies from "@/components/sections/CaseStudies"
import FAQ from "@/components/sections/FAQ"
import CTASection from "@/components/sections/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={6} />
      <Process limit={6} />
      <Products limit={6} />
      <Problems />
      <TrustPoints />
      <CaseStudies limit={2} />
      <FAQ limit={6} />
      <CTASection />
    </>
  )
}
