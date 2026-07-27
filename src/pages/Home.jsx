import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection.jsx";
import StatsBar from "@/components/home/StatsBar.jsx";
import ServicesPreview from "@/components/home/ServicesPreview.jsx";
import ProcessSection from "@/components/home/ProcessSection.jsx";
import ProductsPreview from "@/components/home/ProductsPreview.jsx";
import ProblemsSection from "@/components/home/ProblemsSection.jsx";
import TrustSection from "@/components/home/TrustSection.jsx";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview.jsx";
import FaqSection from "@/components/home/FaqSection.jsx";
import HomeInquirySection from "@/components/home/HomeInquirySection.jsx";
import CtaBanner from "@/components/shared/CtaBanner.jsx";

export default function Home() {
  useEffect(() => {
    document.title =
      "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "SSourcing China is a China-based sourcing agent for global buyers. We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.",
      );
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content =
        "SSourcing China is a China-based sourcing agent for global buyers. We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.";
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <ProcessSection />
      <ProductsPreview />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FaqSection />
      <HomeInquirySection />
      <CtaBanner
        variant="light"
        title="One conversation away from a real factory in China"
        description="Send us a quick description of your product. We will reply within one business day with a sourcing plan and an itemized quote."
        primaryLabel="Get a Free Sourcing Quote"
        primaryTo="/contact"
        secondaryLabel="Read the Process"
        secondaryTo="/how-it-works"
      />
    </>
  );
}
