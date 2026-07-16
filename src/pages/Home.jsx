import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersGrid from '@/components/home/BestsellersGrid';
import CategoryTiles from '@/components/home/CategoryTiles';
import UgcReels from '@/components/home/UgcReels';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <CategoryTiles />
      <UgcReels />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
