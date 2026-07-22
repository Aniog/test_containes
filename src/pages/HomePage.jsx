import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UGCRow from '@/components/home/UGCRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStorySection from '@/components/home/BrandStorySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCRow />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
