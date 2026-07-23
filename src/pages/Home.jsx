import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Bestsellers } from '@/components/sections/Bestsellers';
import { UGCStrip } from '@/components/sections/UGCStrip';
import { CategoryTiles } from '@/components/sections/CategoryTiles';
import { BrandStory } from '@/components/sections/BrandStory';
import { Testimonials } from '@/components/sections/Testimonials';
import { Newsletter } from '@/components/sections/Newsletter';

export function Home() {
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
}
