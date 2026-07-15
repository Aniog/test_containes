import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-mocha/50 mb-4">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
