import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-4">
            Our Bestsellers
          </h2>
          <p className="text-[var(--color-stone)] max-w-md mx-auto">
            The pieces our community can't stop wearing. Timeless designs that complement every moment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className={`animate-fade-in opacity-0 stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors group"
          >
            View All Pieces
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}
