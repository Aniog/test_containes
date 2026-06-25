import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import HomeHero from "@/components/home/HomeHero";
import HomeProducts from "@/components/home/HomeProducts";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeShowcase from "@/components/home/HomeShowcase";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeCta from "@/components/home/HomeCta";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeProducts />
      <HomeShowcase />
      <HomeFeatures />
      <HomeIndustries />
      <HomeCta />
    </div>
  );
}
