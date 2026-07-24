import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UGCRow from '@/components/home/UGCRow';
import CategoriesSection from '@/components/home/CategoriesSection';
import BrandStory from '@/components/home/BrandStory';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCRow />
      <CategoriesSection />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
