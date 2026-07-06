import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Bestsellers } from "@/components/home/Bestsellers";
import { UGCReel } from "@/components/home/UGCReel";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { BrandStory } from "@/components/home/BrandStory";
import { GiftGuide } from "@/components/home/GiftGuide";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <FeatureGrid />
      <BrandStory />
      <GiftGuide />
      <Testimonials />
      <Newsletter />
    </>
  );
}
