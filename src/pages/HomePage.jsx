import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <hr className="hairline-divider max-w-[1400px] mx-auto px-6 md:px-10" />
      <UGCReel />
      <hr className="hairline-divider max-w-[1400px] mx-auto px-6 md:px-10" />
      <CategoryTiles />
      <BrandStory />
      <hr className="hairline-divider max-w-[1400px] mx-auto px-6 md:px-10" />
      <Testimonials />
      <Newsletter />
    </>
  );
}
