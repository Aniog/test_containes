import { HomeHero } from '@/components/home/HomeHero';
import { TrustBar } from '@/components/home/TrustBar';
import { Bestsellers } from '@/components/home/Bestsellers';
import { UGCReels } from '@/components/home/UGCReels';
import { CategoryTiles } from '@/components/home/CategoryTiles';
import { BrandStory } from '@/components/home/BrandStory';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
