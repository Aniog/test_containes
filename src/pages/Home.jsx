import HomeHero from "@/components/home/HomeHero";
import FeatureSection from "@/components/home/FeatureSection";
import ProductHighlights from "@/components/home/ProductHighlights";
import CraftSection from "@/components/home/CraftSection";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeatureSection />
      <ProductHighlights />
      <CraftSection />
      <CTASection />
    </>
  );
}
