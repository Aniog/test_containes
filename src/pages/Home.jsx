import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import Bestsellers from '@/components/Bestsellers';
import UGCRow from '@/components/UGCRow';
import CategoryTiles from '@/components/CategoryTiles';
import BrandStory from '@/components/BrandStory';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}