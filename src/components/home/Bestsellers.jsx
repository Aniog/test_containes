import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-[28px] md:text-[32px] tracking-[0.08em] uppercase text-text-primary">
            Bestsellers
          </h2>
          <p className="text-[13px] text-text-muted mt-3">The pieces our community reaches for again and again.</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
