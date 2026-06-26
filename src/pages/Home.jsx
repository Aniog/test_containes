import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
