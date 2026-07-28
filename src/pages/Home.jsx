import HomeHero from "@/components/home/HomeHero"
import StatsBar from "@/components/home/StatsBar"
import ServicesPreview from "@/components/home/ServicesPreview"
import ProcessPreview from "@/components/home/ProcessPreview"
import ProductsPreview from "@/components/home/ProductsPreview"
import ProblemsSection from "@/components/home/ProblemsSection"
import TrustPoints from "@/components/home/TrustPoints"
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview"
import FaqSection from "@/components/home/FaqSection"
import InquirySection from "@/components/home/InquirySection"

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <ServicesPreview />
      <ProcessPreview />
      <ProductsPreview />
      <ProblemsSection />
      <TrustPoints />
      <CaseStudiesPreview />
      <FaqSection />
      <InquirySection />
    </>
  )
}
