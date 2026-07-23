import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products.js';
import ProductCard from '@/components/ui/ProductCard.jsx';

export default function Bestsellers() {
  const products = PRODUCTS.filter((p) => p.bestseller);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-gold">Most Loved</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <h2 id="bestsellers-title" className="sr-only">Bestsellers</h2>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              query={`[product-${product.id}-title] [bestsellers-title]`}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink px-10 py-3 text-xs uppercase tracking-widest text-ink transition hover:bg-ink hover:text-cream"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}
