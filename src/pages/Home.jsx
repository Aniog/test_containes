import Hero from '@/components/home/Hero.jsx';
import TrustBar from '@/components/home/TrustBar.jsx';
import Bestsellers from '@/components/home/Bestsellers.jsx';
import ReelRow from '@/components/home/ReelRow.jsx';
import CategoryTiles from '@/components/home/CategoryTiles.jsx';
import BrandStory from '@/components/home/BrandStory.jsx';
import Testimonials from '@/components/home/Testimonials.jsx';
import Newsletter from '@/components/home/Newsletter.jsx';
import { ImageScope } from '@/components/StrkImage.jsx';

export default function Home() {
  return (
    <ImageScope>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <ReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </ImageScope>
  );
}
