import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UGCReelsRow from '@/components/home/UGCReelsRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const HomePage = () => (
  <main>
    <HeroSection />
    <TrustBar />
    <BestsellersSection />
    <UGCReelsRow />
    <CategoryTiles />
    <BrandStory />
    <TestimonialsSection />
    <NewsletterSection />
  </main>
);

export default HomePage;
