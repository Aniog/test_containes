import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import HomeHero from "@/components/home/HomeHero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UgcReel from "@/components/home/UgcReel";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Layout transparentNav>
      <div ref={containerRef}>
        <HomeHero />
        <TrustBar />
        <Bestsellers />
        <UgcReel />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </div>
    </Layout>
  );
}
