import {
  Hero,
  TrustBar,
  Bestsellers,
  UGCStrip,
  CategoryTiles,
  BrandStory,
  Testimonials,
  Newsletter,
} from '@/components/sections';

export default function Home() {
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
