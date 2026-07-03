import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Bestsellers from '../components/Bestsellers';
import UGCSection from '../components/UGCSection';
import CategorySection from '../components/CategorySection';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategorySection />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}