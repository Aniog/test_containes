import HeroSection from "@/components/home/HeroSection.jsx";
import TrustBar from "@/components/home/TrustBar.jsx";
import BestsellersSection from "@/components/home/BestsellersSection.jsx";
import ReelsSection from "@/components/home/ReelsSection.jsx";
import CategoriesSection from "@/components/home/CategoriesSection.jsx";
import StorySection from "@/components/home/StorySection.jsx";
import TestimonialsSection from "@/components/home/TestimonialsSection.jsx";
import NewsletterSection from "@/components/home/NewsletterSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <CategoriesSection />
      <ReelsSection />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
