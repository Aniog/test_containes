import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeProcess from "@/components/home/HomeProcess";
import HomeProblems from "@/components/home/HomeProblems";
import HomeTrust from "@/components/home/HomeTrust";
import HomeCaseStudies from "@/components/home/HomeCaseStudies";
import HomeFAQ from "@/components/home/HomeFAQ";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />
      <HomeFAQ />
      <HomeCTA />
    </div>
  );
}
