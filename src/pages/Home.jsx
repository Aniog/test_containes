import React from "react";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProductsSection from "@/components/home/ProductsSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import TrustSection from "@/components/home/TrustSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import FaqSection from "@/components/home/FaqSection";
import InquirySection from "@/components/home/InquirySection";
import ContactStrip from "@/components/site/ContactStrip";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquirySection />
      <ContactStrip />
    </>
  );
};

export default Home;
