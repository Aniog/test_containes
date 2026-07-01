import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import ReelRow from "@/components/home/ReelRow";
import CategoryTiles from "@/components/home/CategoryTiles";
import StorySplit from "@/components/home/StorySplit";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <ReelRow />
      <CategoryTiles />
      <StorySplit />
      <Testimonials />
      <Newsletter />
    </>
  );
}
