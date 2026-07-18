import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersGrid from '@/components/home/BestsellersGrid';
import UGCReelStrip from '@/components/home/UGCReelStrip';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <CategoryTiles />
      <BrandStory />
      <UGCReelStrip />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
