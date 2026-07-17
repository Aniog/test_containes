import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCStrip from '../components/home/UGCStrip';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <NewsletterSection />
    </main>
  );
}
