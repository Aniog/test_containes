import { useRef } from "react";
import { useImageLoader } from "@/hooks/useImageLoader";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Bestsellers } from "@/components/Bestsellers";
import { UGCReel } from "@/components/UGCReel";
import { CategoryTiles } from "@/components/CategoryTiles";
import { BrandStory } from "@/components/BrandStory";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export function Home() {
  const containerRef = useRef(null);
  useImageLoader(containerRef, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home;
