import {
  Hero,
  TrustBar,
  Bestsellers,
  UGCRow,
  CategoryTiles,
  BrandStory,
  Testimonials,
  Newsletter,
} from '@/components/home';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
