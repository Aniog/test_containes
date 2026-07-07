import {
  Hero,
  TrustBar,
  Bestsellers,
  UGCReel,
  CategoryTiles,
  BrandStory,
  Testimonials,
  Newsletter,
} from '../components/HomeSections';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
