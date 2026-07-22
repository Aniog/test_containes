import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}