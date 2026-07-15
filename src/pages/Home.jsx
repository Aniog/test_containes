import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { BestsellersSection } from "@/components/home/BestsellersSection";
import { ReelsRow } from "@/components/home/ReelsRow";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { StorySection } from "@/components/home/StorySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <ReelsRow />
      <CategoriesSection />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
