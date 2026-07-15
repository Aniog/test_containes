import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UgcReelSection from '@/components/home/UgcReelSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import BrandStorySection from '@/components/home/BrandStorySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
