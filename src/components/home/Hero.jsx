import React from 'react';
import { Link } from 'react-router-dom';
import { useImageLoader } from '@/hooks/useImageLoader';

export default function Hero() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-espresso">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ opacity: 0.8 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/60" />

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-cream sm:px-6 lg:px-8">
        <p
          id="hero-subtitle"
          className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-medium leading-[0.95] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-lg font-sans text-sm font-light leading-relaxed text-cream/90 md:text-base">
          Timeless pieces for everyday rituals and once-in-a-lifetime moments.
          Designed for women who collect memories, not clutter.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-gold-hover"
        >
          Shop the Collection
        </Link>
      </div>

    </section>
  );
}
