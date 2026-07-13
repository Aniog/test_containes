import Seo from "@/components/shared/Seo.jsx"
import Hero from "@/components/home/Hero.jsx"
import TrustStrip from "@/components/home/TrustStrip.jsx"
import ServicesOverview from "@/components/home/ServicesOverview.jsx"
import HowItWorksPreview from "@/components/home/HowItWorksPreview.jsx"
import ProductsPreview from "@/components/home/ProductsPreview.jsx"
import ProblemsWeSolve from "@/components/home/ProblemsWeSolve.jsx"
import TrustPoints from "@/components/home/TrustPoints.jsx"
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview.jsx"
import HomeFAQ from "@/components/home/HomeFAQ.jsx"
import HomeInquiry from "@/components/home/HomeInquiry.jsx"
import CtaBanner from "@/components/shared/CtaBanner.jsx"

export default function Home() {
  return (
    <>
      <Seo
        title="China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
        description="Independent China sourcing agent for global buyers. We find reliable suppliers, verify factories, inspect quality, and coordinate shipping — in plain English."
      />
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <HowItWorksPreview />
      <ProductsPreview />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <HomeFAQ />
      <HomeInquiry />
      <CtaBanner
        eyebrow="Talk to a sourcing specialist"
        title="Not sure where to start? A 20-minute call is usually enough to scope your project."
        description="Tell us what you want to source and we'll come back with a written plan, an honest assessment of feasibility, and a transparent quote."
        primaryTo="/contact"
        primaryLabel="Get a Free Sourcing Quote"
        secondaryTo="/how-it-works"
        secondaryLabel="See How It Works"
      />
    </>
  )
}
