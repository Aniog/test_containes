import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

export default function BestsellersSection() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 id="bestsellers-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="text-[var(--velmora-text-muted)] max-w-md mx-auto">
            Our most loved pieces, chosen by women who know quality
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <a href="/shop" className="btn-outline">
            View All Pieces
          </a>
        </div>
      </div>
    </section>
  );
}
