import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-2">Most Loved</p>
            <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
          </div>
          <a href="/shop" className="hidden md:inline-flex text-xs font-semibold tracking-widest uppercase text-ink-muted hover:text-accent transition-colors">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <a href="/shop" className="text-xs font-semibold tracking-widest uppercase text-ink-muted hover:text-accent transition-colors">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
