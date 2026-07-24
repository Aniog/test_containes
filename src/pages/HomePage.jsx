import React, { useEffect } from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UgcReel from "@/components/home/UgcReel";
import CategoryTiles from "@/components/home/CategoryTiles";
import StorySplit from "@/components/home/StorySplit";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { useReveal } from "@/hooks/useReveal";

export default function HomePage() {
  // Mount a single IntersectionObserver on the home page body
  const ref = useReveal();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div ref={ref}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <CategoryTiles />
      <StorySplit />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
