import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import ReelsRow from "@/components/home/ReelsRow";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <Layout transparentNav>
      <div ref={containerRef}>
        <Hero />
        <TrustBar />
        <Bestsellers />
        <ReelsRow />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </div>
    </Layout>
  );
}
