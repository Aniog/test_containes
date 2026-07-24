import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { getBestsellers } from '../../data/products';

const Bestsellers = () => {
  const bestsellers = getBestsellers().slice(0, 5);

  return (
    <section className="section-padding">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-gold)' }}
          >
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Our Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product, index) => (
            <div key={product.id} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-gold-dark)]"
            style={{ color: 'var(--color-espresso)' }}
          >
            View All Jewelry
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
