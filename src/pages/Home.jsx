import { Hero } from "../components/home/Hero";
import { TrustBar } from "../components/home/TrustBar";
import { Bestsellers } from "../components/home/Bestsellers";
import { UGC } from "../components/home/UGC";
import { Categories } from "../components/home/Categories";
import { BrandStory } from "../components/home/BrandStory";
import { Testimonials } from "../components/home/Testimonials";
import { Newsletter } from "../components/home/Newsletter";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";

// Seed Data
const MOCK_PRODUCTS = [
  { id: "1", name: "Vivid Aura Jewels", price: 42.00, imgId: "prod-1-vivid" },
  { id: "2", name: "Majestic Flora Nectar", price: 68.00, imgId: "prod-2-flora" },
  { id: "3", name: "Golden Sphere Huggies", price: 38.00, imgId: "prod-3-sphere" },
  { id: "4", name: "Amber Lace Earrings", price: 54.00, imgId: "prod-4-amber" },
  { id: "5", name: "Royal Heirloom Set", price: 95.00, imgId: "prod-5-royal" },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load images once component is mounted
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        try {
          ImageHelper.loadImages({}, containerRef.current);
        } catch(e) {
          console.log("ImageHelper init failed");
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <Hero />
      <TrustBar />
      <Bestsellers products={MOCK_PRODUCTS} />
      <UGC />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}