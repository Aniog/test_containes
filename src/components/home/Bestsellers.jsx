import ProductCard from './ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Section heading */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-taupe mb-3">
          Curated For You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-soft-black font-normal">
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
