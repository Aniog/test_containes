import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import ReelUGC from "@/components/home/ReelUGC";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import EditorialPromise from "@/components/home/EditorialPromise";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <ReelUGC />
      <CategoryTiles />
      <BrandStory />
      <EditorialPromise />
      <Testimonials />
      <Newsletter />
    </>
  );
}
