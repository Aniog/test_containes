import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller || p.featured).slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-overline uppercase tracking-overline text-gold block mb-3">
            Curated Selection
          </span>
          <h2 className="font-serif text-3xl md:text-heading-2 text-velmora-900">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-velmora-400 max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate quiet luxury.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-900 text-velmora-900 px-10 py-3 text-sm font-medium tracking-wide uppercase hover:bg-velmora-900 hover:text-white transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
