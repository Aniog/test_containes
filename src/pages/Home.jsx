import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Process from "@/components/home/Process"
import Products from "@/components/home/Products"
import Problems from "@/components/home/Problems"
import Trust from "@/components/home/Trust"
import CaseStudies from "@/components/home/CaseStudies"
import FAQ from "@/components/home/FAQ"
import Inquiry from "@/components/home/Inquiry"
import CTABanner from "@/components/CTABanner"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudies />
      <FAQ />
      <Inquiry />
      <CTABanner
        title="Ready to source from China with confidence?"
        description="Get a free sourcing quote and see how SSourcing China can support your next order."
      />
    </>
  )
}
