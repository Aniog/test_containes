import HeroSection from '../components/sections/HeroSection';
import TrustBar from '../components/sections/TrustBar';
import Bestsellers from '../components/sections/Bestsellers';
import UGCRow from '../components/sections/UGCRow';
import CategoryTiles from '../components/sections/CategoryTiles';
import BrandStory from '../components/sections/BrandStory';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
