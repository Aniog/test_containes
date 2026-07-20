import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-deep/40" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/80 text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-5">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-[1.05] max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 text-white/80 text-sm md:text-base font-sans font-light max-w-md leading-relaxed"
        >
          Timeless pieces designed for the modern woman. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-velmora-bronze text-white text-[13px] font-sans uppercase tracking-[0.1em] px-10 py-3.5 hover:bg-velmora-gold transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
