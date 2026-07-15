import {
  Hero,
  TrustBar,
  Bestsellers,
  UGCReels,
  CategoryTiles,
  BrandStory,
  Testimonials,
  Newsletter,
} from '@/components/home';

export default function Home() {
  return (
    <>
      <Hero />
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
