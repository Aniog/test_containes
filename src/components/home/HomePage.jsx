import Hero from './Hero';
import TrustBar from './TrustBar';
import Bestsellers from './Bestsellers';
import UGCStrip from './UGCStrip';
import ShopByCategory from './ShopByCategory';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCStrip />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}