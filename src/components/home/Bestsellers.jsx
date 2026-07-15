import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 section-padding">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-2 font-sans">
              Curated for You
            </p>
            <h2 className="text-heading-1 text-charcoal-800">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-body-sm uppercase tracking-[0.1em] text-charcoal-600 hover:text-gold-600 transition-colors mt-4 md:mt-0 no-underline"
          >
            View All →
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
