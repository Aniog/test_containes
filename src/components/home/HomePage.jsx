import Hero from './Hero';
import TrustBar from './TrustBar';
import Bestsellers from './Bestsellers';
import UGCSection from './UGCSection';
import CategorySection from './CategorySection';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategorySection />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;