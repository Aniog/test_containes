import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ProblemsSolved from "@/components/sections/ProblemsSolved";
import TrustPoints from "@/components/sections/TrustPoints";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import FAQSection from "@/components/sections/FAQSection";
import InquirySection from "@/components/sections/InquirySection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessSteps />
      <ProductsGrid compact />
      <ProblemsSolved />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQSection />
      <InquirySection />
      <CTABanner />
    </>
  );
}
