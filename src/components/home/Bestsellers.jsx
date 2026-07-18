import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/shared/ProductCard';
import { PRODUCTS } from '@/data/products';

export function Bestsellers() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Curated Favorites
            </p>
            <h2 className="mt-2 font-serif text-4xl text-ink md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden font-sans text-xs font-medium uppercase tracking-widest text-ink underline underline-offset-4 transition hover:text-gold md:block"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block border-b border-ink pb-1 font-sans text-xs font-medium uppercase tracking-widest text-ink"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
