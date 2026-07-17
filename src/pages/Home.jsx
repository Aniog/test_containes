import Hero from "@/components/home/Hero";
import TrustBar from "@/components/layout/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UgcReel from "@/components/home/UgcReel";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/layout/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
