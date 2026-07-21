import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import BestsellersSection from '@/components/BestsellersSection';
import UGCReelSection from '@/components/UGCReelSection';
import CategoryTiles from '@/components/CategoryTiles';
import BrandStory from '@/components/BrandStory';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCReelSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
