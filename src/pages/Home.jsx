import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { Bestsellers } from '../components/home/Bestsellers';
import { UGCReels } from '../components/home/UGCReels';
import { CategorySection } from '../components/home/CategorySection';
import { BrandStory } from '../components/home/BrandStory';
import { Testimonials } from '../components/home/Testimonials';
import { Newsletter } from '../components/home/Newsletter';

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <CategorySection />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;
