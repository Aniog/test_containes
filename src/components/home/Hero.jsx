import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          data-strk-bg-id="hero-background"
          data-strk-bg="gold jewelry on model warm lighting editorial luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          role="img"
          aria-label="Close-up of gold jewelry on a model in warm lighting"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-velmora relative z-10">
        <div className="max-w-xl">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-[1.1] mb-6">
            Crafted to be{' '}
            <span className="italic">Treasured</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-md">
            Premium demi-fine jewelry designed for the modern woman. 
            18K gold-plated, hypoallergenic, and made to last.
          </p>
          <Link
            to="/shop"
            className="btn-primary inline-block"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
