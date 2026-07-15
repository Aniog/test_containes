import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Bestsellers from '../components/Bestsellers';
import UGCReel from '../components/UGCReel';
import CategoryTiles from '../components/CategoryTiles';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { products, testimonials, ugcItems } from '../data/products';

export default function HomePage() {
  const bestsellerProducts = products.filter(p => p.bestseller);

  return (
    <div>
      <Hero />
      <TrustBar />
      <Bestsellers products={bestsellerProducts} />
      <UGCReel items={ugcItems} />
      <CategoryTiles />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </div>
  );
}
