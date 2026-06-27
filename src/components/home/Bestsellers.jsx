import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  // Top 5 bestsellers
  const items = PRODUCTS.slice(0, 5);

  return (
    <section id="bestsellers" className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-4">Most Loved</p>
            <h2
              id="bestsellers-title"
              className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05]"
            >
              Best Sellers
            </h2>
            <p
              id="bestsellers-subtitle"
              className="text-sm md:text-base text-charcoal mt-5 max-w-lg leading-relaxed"
            >
              The pieces our community reaches for, again and again.
              Quietly made to be worn every day.
            </p>
          </div>
          <Link
            to="/shop"
            className="btn-ghost self-start md:self-end"
            id="bestsellers-cta"
          >
            View all
          </Link>
        </div>

        {/* Hairline */}
        <div className="hairline mb-10" />

        {/* Grid: 2 mobile, 3 tablet, 5 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-7 gap-y-12 md:gap-y-14">
          {items.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}