import React from 'react';
import { Link } from 'react-router-dom';
import { StockBackground } from '@/components/shared/StockImage';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <StockBackground
        id="hero-bg"
        ratio="16x9"
        width={1600}
        queryParts={['hero-subhead', 'hero-title']}
        className="absolute inset-0 h-full w-full bg-stone-800 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
          <div className="max-w-2xl animate-fadeUp">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-cream/80"
            >
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="mt-4 font-serif text-5xl font-light leading-[1.1] text-cream md:text-7xl lg:text-8xl"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subhead"
              className="mt-6 max-w-md text-base leading-relaxed text-cream/90 md:text-lg"
            >
              Timeless pieces designed for everyday elegance and the moments worth remembering.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block bg-gold px-10 py-4 font-sans text-xs font-medium uppercase tracking-widest text-white transition hover:bg-gold-dark"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
