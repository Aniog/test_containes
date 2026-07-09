import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import CategoryTiles from "@/components/home/CategoryTiles";
import UGCReels from "@/components/home/UGCReels";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <Bestsellers />
      <CategoryTiles />
      <UGCReels />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
