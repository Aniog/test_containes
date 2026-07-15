import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { BestsellersSection } from '@/components/home/BestsellersSection';
import { UgcReelsSection } from '@/components/home/UgcReelsSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { BrandStorySection } from '@/components/home/BrandStorySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <div className="animate-fadeIn">
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelsSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
