import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink">Bestsellers</h2>
            <p className="mt-2 text-sm text-ink/60">Our most-loved pieces, chosen by you.</p>
          </div>
          <a
            href="/shop"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
          >
            View all
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
