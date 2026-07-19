import { useRef } from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UGCReel from "@/components/home/UGCReel";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="page-fade">
      <Hero />
      <TrustBar tone="dark" />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
