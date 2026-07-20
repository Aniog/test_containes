import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCStrip from '../components/home/UGCStrip';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import { products, categories, testimonials, ugcPosts } from '../data/products';

export default function Home() {
  // Get only bestseller products for the grid
  const bestsellerProducts = products.filter(p => p.isBestseller).slice(0, 5);

  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <Bestsellers products={bestsellerProducts} />
      <UGCStrip posts={ugcPosts} />
      <CategoryTiles categories={categories} />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </div>
  );
}
