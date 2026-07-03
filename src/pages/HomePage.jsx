import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCSection from '@/components/home/UGCSection';
import CategorySection from '@/components/home/CategorySection';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
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