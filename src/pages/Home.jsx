import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { BestsellersSection } from '@/components/home/BestsellersSection';
import { UgcReelsSection } from '@/components/home/UgcReelsSection';
import { CategoryTiles } from '@/components/home/CategoryTiles';
import { BrandStorySection } from '@/components/home/BrandStorySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelsSection />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
