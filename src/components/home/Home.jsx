import Hero from './Hero';
import TrustBar from './TrustBar';
import Bestsellers from './Bestsellers';
import UGC from './UGC';
import Categories from './Categories';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGC />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}