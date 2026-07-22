import { useStrkImages } from "@/lib/use-strk-images.js";
import Hero from "@/components/home/Hero.jsx";
import TrustBar from "@/components/home/TrustBar.jsx";
import Bestsellers from "@/components/home/Bestsellers.jsx";
import UgcReels from "@/components/home/UgcReels.jsx";
import CategoryTiles from "@/components/home/CategoryTiles.jsx";
import BrandStory from "@/components/home/BrandStory.jsx";
import Testimonials from "@/components/home/Testimonials.jsx";
import Newsletter from "@/components/home/Newsletter.jsx";

export default function Home() {
  const containerRef = useStrkImages();

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
