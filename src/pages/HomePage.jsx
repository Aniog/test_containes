import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { BestsellersSection } from '@/components/home/BestsellersSection';
import { ReelsSection } from '@/components/home/ReelsSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { StorySection } from '@/components/home/StorySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { Newsletter } from '@/components/ui/Newsletter';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <ReelsSection />
      <CategoriesSection />
      <StorySection />
      <TestimonialsSection />
      <Newsletter />
    </>
  );
}
