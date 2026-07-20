import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import Bestsellers from "../components/home/Bestsellers";
import UGCRow from "../components/home/UGCRow";
import CategoryTiles from "../components/home/CategoryTiles";
import BrandStory from "../components/home/BrandStory";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <div className="hairline" />
      <UGCRow />
      <div className="hairline" />
      <CategoryTiles />
      <BrandStory />
      <div className="hairline" />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
