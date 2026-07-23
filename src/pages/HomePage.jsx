import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UGCRow from '@/components/home/UGCRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
