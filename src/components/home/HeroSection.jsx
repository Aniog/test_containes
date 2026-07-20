import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="Crafted to be Treasured gold jewelry demi-fine luxury editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-ink-950/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-xs sm:text-sm font-medium tracking-superwide uppercase text-cream-200/80">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-5 max-w-md text-sm sm:text-base text-cream-100/80 leading-relaxed">
          Demi-fine gold jewelry designed for everyday elegance and moments worth remembering.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center rounded-sm bg-gold-600 px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white hover:bg-gold-700 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
