import React from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UgcReels from "@/components/home/UgcReels";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { useStrkImages } from "@/hooks/useStrkImages";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  const imagesRef = useStrkImages();
  const revealRef = useReveal();

  return (
    <div
      ref={(node) => {
        imagesRef.current = node;
        revealRef.current = node;
      }}
    >
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
