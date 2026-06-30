import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import Bestsellers from '../components/Bestsellers';
import UGCStrip from '../components/UGCStrip';
import CategoryTiles from '../components/CategoryTiles';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
