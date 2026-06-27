import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UgcReelStrip from '@/components/home/UgcReelStrip';
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
      <div className="border-t border-velmora-divider" />
      <UgcReelStrip />
      <CategoryTiles />
      <div className="border-t border-velmora-divider" />
      <BrandStory />
      <div className="border-t border-velmora-divider" />
      <Testimonials />
      <Newsletter />
    </>
  );
}
