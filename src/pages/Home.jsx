import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import BestSellers from "@/components/home/BestSellers";
import UGCReel from "@/components/home/UGCReel";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BestSellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
