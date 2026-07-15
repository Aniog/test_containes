import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { Bestsellers } from '@/components/home/Bestsellers';
import { UGCRow } from '@/components/home/UGCRow';
import { ShopByCategory } from '@/components/home/ShopByCategory';
import { BrandStory } from '@/components/home/BrandStory';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';

export function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
