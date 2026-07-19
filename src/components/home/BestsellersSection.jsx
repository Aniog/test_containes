import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function BestsellersSection() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Most Loved
          </p>
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl md:text-5xl font-medium"
          >
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              query={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 border border-ink text-ink text-sm font-medium tracking-widest uppercase hover:bg-ink hover:text-cream-50 transition-all duration-300"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}
