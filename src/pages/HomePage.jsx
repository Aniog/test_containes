import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCRow from '@/components/home/UGCRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
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