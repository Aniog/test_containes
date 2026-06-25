import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">
              The Edit
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
              Bestsellers
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mocha md:text-base">
              The pieces our community returns to, season after season.
            </p>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-[0.3em] text-ink underline-offset-8 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
