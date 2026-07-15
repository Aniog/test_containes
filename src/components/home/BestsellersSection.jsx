import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export function BestsellersSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-velmora-accent mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
