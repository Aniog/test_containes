import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UGCRow from "@/components/home/UGCRow";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { products } from "@/data/products";

export default function Home() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <div className="bg-velmora-cream">
      <Hero />
      <TrustBar />
      <Bestsellers products={bestsellers} />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
