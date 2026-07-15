import React, { useRef, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import BestsellersSection from "@/components/home/BestsellersSection";
import UGCSection from "@/components/home/UGCSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import BrandStorySection from "@/components/home/BrandStorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={pageRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
