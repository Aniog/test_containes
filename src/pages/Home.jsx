import Hero from "@/components/home/Hero.jsx";
import TrustBar from "@/components/home/TrustBar.jsx";
import Bestsellers from "@/components/home/Bestsellers.jsx";
import ReelStrip from "@/components/home/ReelStrip.jsx";
import CategoryTiles from "@/components/home/CategoryTiles.jsx";
import BrandStory from "@/components/home/BrandStory.jsx";
import Testimonials from "@/components/home/Testimonials.jsx";
import Newsletter from "@/components/home/Newsletter.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <ReelStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
