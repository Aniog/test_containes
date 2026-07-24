import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import BestsellersSection from "@/components/home/BestsellersSection";
import ReelsSection from "@/components/home/ReelsSection";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <CategoryTiles />
      <BrandStory />
      <ReelsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
