import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import BestSellers from "../components/BestSellers";
import UGCStrip from "../components/UGCStrip";
import CategoryTiles from "../components/CategoryTiles";
import BrandStory from "../components/BrandStory";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BestSellers />
      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
