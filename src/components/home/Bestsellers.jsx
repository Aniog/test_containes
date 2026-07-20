import React from 'react';
import ProductCard from '@/components/ProductCard';
import { getBestsellers } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-14 sm:py-20 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-medium tracking-superwide uppercase text-gold-600 mb-2">
            Most Loved
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-900">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
