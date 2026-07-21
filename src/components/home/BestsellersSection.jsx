import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../shared/ProductCard';

const BestsellersSection = () => {
  // Get first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-[var(--ivory-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm tracking-[0.2em] text-[var(--champagne-gold)] mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            CUSTOMER FAVORITES
          </p>
          <h2
            className="text-3xl md:text-4xl text-[var(--deep-espresso)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Bestsellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-[var(--champagne-gold)] transition-colors group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
