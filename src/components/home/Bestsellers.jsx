import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard.jsx';
import { products } from '@/data/products.js';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl font-light md:text-4xl lg:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="border-b border-foreground pb-1 text-xs font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:text-accent hover:border-accent"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
