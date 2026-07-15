import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Most Loved</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
          </div>
          <a href="/shop" className="hidden md:inline-flex text-sm font-medium text-ink-secondary hover:text-accent transition-colors">
            View all
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="/shop" className="btn-outline">View all</a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
