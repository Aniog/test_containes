import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProductsSection from "@/components/home/ProductsSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import TrustSection from "@/components/home/TrustSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import FaqSection from "@/components/home/FaqSection";
import InquirySection from "@/components/home/InquirySection";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquirySection />
    </div>
  );
};

export default Home;
