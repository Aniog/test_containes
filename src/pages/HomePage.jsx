import Hero from "../components/home/Hero.jsx";
import TrustBar from "../components/home/TrustBar.jsx";
import Bestsellers from "../components/home/Bestsellers.jsx";
import UGCReel from "../components/home/UGCReel.jsx";
import CategoryTiles from "../components/home/CategoryTiles.jsx";
import BrandStory from "../components/home/BrandStory.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Newsletter from "../components/home/Newsletter.jsx";

export default function HomePage() {
  // Scroll restoration is handled by Layout; no per-page effect needed.

  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
