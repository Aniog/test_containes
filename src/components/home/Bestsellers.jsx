import ProductCard from '@/components/shared/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-muted mb-3">Most Loved</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
