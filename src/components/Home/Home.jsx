import Hero from '../../components/Hero/Hero';
import TrustBar from '../../components/Hero/TrustBar';
import Bestsellers from '../../components/Products/Bestsellers';
import UGCReel from '../../components/Products/UGCReel';
import CategoryTiles from '../../components/Products/CategoryTiles';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
