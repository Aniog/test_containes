import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Reveal from '@/components/Reveal';

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-espresso md:text-5xl">
              The <span className="italic">Bestsellers</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-colors hover:text-gold-deep"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </Reveal>

      {/* 5 cards: 2-up on mobile, editorial 5-across on desktop */}
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:gap-x-6 lg:grid-cols-5">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.id} delay={i * 80} className={i === PRODUCTS.length - 1 ? 'col-span-2 lg:col-span-1' : ''}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
