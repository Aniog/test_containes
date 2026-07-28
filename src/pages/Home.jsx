import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesOverview from "@/components/home/ServicesOverview";
import SourcingProcess from "@/components/home/SourcingProcess";
import ProductsGrid from "@/components/home/ProductsGrid";
import ProblemsWeSolve from "@/components/home/ProblemsWeSolve";
import TrustPoints from "@/components/home/TrustPoints";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import FAQ from "@/components/home/FAQ";
import InquirySection from "@/components/home/InquirySection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsGrid />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquirySection />
    </>
  );
}
