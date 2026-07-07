import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-charcoal-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-cream-200 text-xs uppercase tracking-extra-wide mb-4">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 font-light leading-tight max-w-3xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-cream-200/90 text-base md:text-lg max-w-lg leading-relaxed font-light">
          Demi-fine gold jewelry designed for the moments that matter. Wear it daily. Gift it forever.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-gold-600 text-cream-50 px-10 py-4 text-sm uppercase tracking-extra-wide font-medium hover:bg-gold-700 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
