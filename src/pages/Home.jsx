import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import Process from "@/components/home/Process";
import Products from "@/components/home/Products";
import Problems from "@/components/home/Problems";
import Trust from "@/components/home/Trust";
import CaseStudies from "@/components/home/CaseStudies";
import Faq from "@/components/home/Faq";
import CtaInquiry from "@/components/home/CtaInquiry";
import Seo from "@/components/ui/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
        description="SSourcing China is a B2B sourcing agent helping overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping. Get a free sourcing quote."
      />
      <Hero />
      <ServiceHighlights />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudies />
      <Faq />
      <CtaInquiry />
    </>
  );
}
