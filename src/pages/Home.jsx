import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCReelSection from '../components/home/UGCReelSection';
import CategorySection from '../components/home/CategorySection';
import BrandStorySection from '../components/home/BrandStorySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCReelSection />
      <CategorySection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
