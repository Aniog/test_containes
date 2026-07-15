import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import BestsellersSection from "@/components/home/BestsellersSection";
import UGCSection from "@/components/home/UGCSection";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
