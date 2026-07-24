import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products, getBestsellers } from '@/data/products';

const Bestsellers = () => {
  const items = getBestsellers().slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Curated for you</p>
          <h2 className="section-heading mt-2">Bestsellers</h2>
        </div>
        <a href="/shop" className="hidden sm:inline-flex text-xs font-semibold tracking-[0.14em] uppercase text-ink-secondary hover:text-ink transition-colors">
          View all
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 sm:hidden text-center">
        <a href="/shop" className="btn-outline">View all</a>
      </div>
    </section>
  );
};

export default Bestsellers;
