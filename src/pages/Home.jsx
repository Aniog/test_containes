import Hero from './home/Hero';
import TrustBar from './home/TrustBar';
import Bestsellers from './home/Bestsellers';
import UGCReels from './home/UGCReels';
import ShopByCategory from './home/ShopByCategory';
import BrandStory from './home/BrandStory';
import Testimonials from './home/Testimonials';
import Newsletter from './home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}