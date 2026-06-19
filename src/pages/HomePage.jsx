import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReels from '@/components/home/UGCReels';
import Categories from '@/components/home/Categories';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
