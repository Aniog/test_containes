import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.rating >= 4.8).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-base-cream">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-base-charcoal mb-4">
              Bestsellers
            </h2>
            <p className="text-base-muted max-w-xl mx-auto">
              Our most-loved pieces, chosen by you. Timeless designs that become part of your story.
            </p>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-gold hover:text-gold-dark transition-colors duration-200"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
