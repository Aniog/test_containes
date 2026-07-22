import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import BestsellersSection from "@/components/home/BestsellersSection";
import ReelStrip from "@/components/home/ReelStrip";
import CategoryTiles from "@/components/home/CategoryTiles";
import StorySection from "@/components/home/StorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <ReelStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
