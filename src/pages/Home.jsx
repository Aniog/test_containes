import React from "react";
import HomeHero from "@/components/home/HomeHero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import ReelsStrip from "@/components/home/ReelsStrip";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <ReelsStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
