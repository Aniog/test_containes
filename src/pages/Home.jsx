import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import SourcingProcessSection from "@/components/home/SourcingProcessSection";
import ProductsSection from "@/components/home/ProductsSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import TrustSection from "@/components/home/TrustSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import FAQSection from "@/components/home/FAQSection";
import InquiryFormSection from "@/components/home/InquiryFormSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SourcingProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryFormSection />
    </>
  );
}
