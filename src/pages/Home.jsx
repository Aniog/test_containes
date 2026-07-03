import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCStrip from '../components/home/UGCStrip';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
