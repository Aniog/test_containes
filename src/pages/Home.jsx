import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UgcRow from "@/components/home/UgcRow";
import CategoryTiles from "@/components/home/CategoryTiles";
import StorySection from "@/components/home/StorySection";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcRow />
      <CategoryTiles />
      <StorySection />
      <Testimonials />
      <Newsletter />
    </>
  );
}