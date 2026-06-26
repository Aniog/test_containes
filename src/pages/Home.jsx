import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import SourcingProcess from "@/components/home/SourcingProcess";
import ProductsGrid from "@/components/home/ProductsGrid";
import Problems from "@/components/home/Problems";
import TrustPoints from "@/components/home/TrustPoints";
import CaseStudies from "@/components/home/CaseStudies";
import FAQ from "@/components/home/FAQ";
import InquirySection from "@/components/home/InquirySection";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsGrid />
      <Problems />
      <TrustPoints />
      <CaseStudies />
      <FAQ />
      <InquirySection />
      <CTA
        title="Get a free sourcing assessment"
        description="Send us your product spec and quantity. We will reply within one business day with a shortlist of factories and a transparent quote."
        primary={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondary={{ to: "/services", label: "Browse services" }}
      />
    </>
  );
}