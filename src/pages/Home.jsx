import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ProductCard from '@/components/ProductCard';
import UGCReels from '@/components/UGCReels';
import CategoryTiles from '@/components/CategoryTiles';
import BrandStory from '@/components/BrandStory';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import { products } from '@/data/products';

const bestsellers = products.slice(0, 5);

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />

      <section className="py-14 md:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
            <a href="/shop" className="text-xs md:text-sm tracking-widest uppercase text-lightgray hover:text-charcoal transition-colors">
              View All
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
