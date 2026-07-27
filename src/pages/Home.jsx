import React from "react";
import HomeHero from "../components/sections/HomeHero.jsx";
import ServicesOverview from "../components/sections/ServicesOverview.jsx";
import ProcessOverview from "../components/sections/ProcessOverview.jsx";
import ProductsOverview from "../components/sections/ProductsOverview.jsx";
import ProblemsSection from "../components/sections/ProblemsSection.jsx";
import TrustSection from "../components/sections/TrustSection.jsx";
import CaseStudiesPreview from "../components/sections/CaseStudiesPreview.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import InquirySection from "../components/sections/InquirySection.jsx";
import CTABanner from "../components/sections/CTABanner.jsx";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustSection />
      <ServicesOverview />
      <ProcessOverview />
      <ProductsOverview />
      <ProblemsSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquirySection />
      <CTABanner />
    </>
  );
}
