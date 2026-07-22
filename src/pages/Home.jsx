import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UgcReels from "@/components/home/UgcReels";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  // Always scroll to top on route change to home
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
