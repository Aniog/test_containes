import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UGCReels from "@/components/home/UGCReels";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  const location = useLocation();

  // If the user lands with ?scroll=<id> in the URL (rare on this site but
  // useful when other pages link into a section), honour it.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get("scroll");
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        );
      }
    }
  }, [location.search]);

  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
