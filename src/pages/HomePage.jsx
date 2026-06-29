import { useEffect, useRef } from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UGCCarousel from "@/components/home/UGCCarousel";
import Categories from "@/components/home/Categories";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCCarousel />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
