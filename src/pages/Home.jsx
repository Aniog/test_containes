import { useEffect } from "react";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Bestsellers from "@/sections/Bestsellers";
import UGCReel from "@/sections/UGCReel";
import CategoryTiles from "@/sections/CategoryTiles";
import BrandStory from "@/sections/BrandStory";
import Testimonials from "@/sections/Testimonials";
import Newsletter from "@/sections/Newsletter";
import { useImageLoader } from "@/hooks/useImageLoader";

const Home = () => {
  const containerRef = useImageLoader([]);

  useEffect(() => {
    document.title = "Velmora Fine Jewelry | Crafted to be Treasured";
  }, []);

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
};

export default Home;
