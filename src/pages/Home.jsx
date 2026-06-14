import HomeHero from "@/components/home/HomeHero"
import ValuePillars from "@/components/home/ValuePillars"
import ProductPreview from "@/components/home/ProductPreview"
import ProcessSteps from "@/components/home/ProcessSteps"
import IndustriesStrip from "@/components/home/IndustriesStrip"
import CTASection from "@/components/home/CTASection"

export default function Home() {
  return (
    <>
      <HomeHero />
      <ValuePillars />
      <ProductPreview />
      <ProcessSteps />
      <IndustriesStrip />
      <CTASection />
    </>
  )
}
