import { HomeHero } from '@/components/home/HomeHero';
import { TrustBar } from '@/components/home/TrustBar';
import { Bestsellers } from '@/components/home/Bestsellers';
import { ReelRow } from '@/components/home/ReelRow';
import { CategoryTiles } from '@/components/home/CategoryTiles';
import { BrandStory } from '@/components/home/BrandStory';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <ReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
