import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-slide-up">
            <p id="hero-subtitle" className="text-xs uppercase tracking-widest text-brand-goldLight/90 mb-4">Demi-Fine Jewelry</p>
            <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
              Modern heirlooms in 18K gold. Designed for the woman who values quiet luxury and timeless elegance.
            </p>
            <div className="mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3.5 text-sm font-medium text-white hover:bg-brand-accentHover transition-colors"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
