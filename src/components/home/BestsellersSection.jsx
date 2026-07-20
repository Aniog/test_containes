import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import { getBestsellers } from '../../data/products';

export default function BestsellersSection() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 md:py-28 bg-[var(--velmora-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm tracking-widest uppercase text-[var(--velmora-taupe)] mb-3 block">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--velmora-charcoal)] mb-4">
            Our Bestsellers
          </h2>
          <p className="text-[var(--velmora-gray-600)] max-w-xl mx-auto">
            Discover the pieces our community can't stop wearing. Timeless designs crafted for everyday elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 stagger-children">
          {bestsellers.slice(0, 5).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-[var(--velmora-charcoal)] hover:text-[var(--velmora-gold)] transition-colors group"
          >
            <span className="text-sm tracking-wider uppercase">View All</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
