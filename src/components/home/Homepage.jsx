import Hero from './Hero';
import TrustBar from './TrustBar';
import Bestsellers from './Bestsellers';
import UGCStrip from './UGCStrip';
import CategoryTiles from './CategoryTiles';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

const Homepage = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Homepage;