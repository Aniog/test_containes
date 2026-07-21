import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">Most Loved</p>
            <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl">
              The Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group hidden items-center gap-2 border-b border-ink/30 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:border-bronze hover:text-bronze md:inline-flex"
          >
            View All
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:gap-x-6 lg:grid-cols-5">
          {bestsellers.map((product, i) => (
            <div key={product.id} className="reveal">
              <ProductCard product={product} eager={i < 2} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-ink/30 px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] text-ink transition-all hover:border-ink hover:bg-ink hover:text-ivory"
          >
            View All Pieces
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
