import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UgcReel from '@/components/home/UgcReel';
import ShopCategories from '@/components/home/ShopCategories';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <div className="hairline-divider" />
      <UgcReel />
      <div className="hairline-divider" />
      <ShopCategories />
      <BrandStory />
      <Testimonials />
      <div className="hairline-divider" />
      <Newsletter />
    </main>
  );
}