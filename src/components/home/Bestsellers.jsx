import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-accent">Most loved</p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-brand-ink sm:text-4xl">Bestsellers</h2>
        </div>
        <a href="/shop" className="hidden text-xs uppercase tracking-widest text-brand-ink hover:text-brand-accent md:block">
          View all
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <a href="/shop" className="text-xs uppercase tracking-widest text-brand-ink hover:text-brand-accent">
          View all
        </a>
      </div>
    </section>
  );
};

export default Bestsellers;
