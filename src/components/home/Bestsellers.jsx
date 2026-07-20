import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-light">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}