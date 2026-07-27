import HeroSection from "@/components/home/HeroSection"
import ServicesOverview from "@/components/home/ServicesOverview"
import ProcessPreview from "@/components/home/ProcessPreview"
import ProductsPreview from "@/components/home/ProductsPreview"
import ProblemsSection from "@/components/home/ProblemsSection"
import TrustPointsSection from "@/components/home/TrustPoints"
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview"
import FAQSection from "@/components/home/FAQSection"
import InquiryForm from "@/components/home/InquiryForm"
import FinalCTA from "@/components/home/FinalCTA"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ProcessPreview />
      <ProductsPreview />
      <ProblemsSection />
      <TrustPointsSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryForm />
      <FinalCTA />
    </>
  )
}
