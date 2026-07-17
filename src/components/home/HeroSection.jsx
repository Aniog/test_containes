import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-deep-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26, 24, 23, 0.2) 0%, rgba(26, 24, 23, 0.5) 100%)`,
          }}
        />
        {/* Warm gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/20 via-transparent to-deep-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-warm-300 text-xs lg:text-sm tracking-widest3 uppercase mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream font-light leading-tight mb-6 animate-slide-up max-w-3xl">
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p className="text-sand/80 text-sm lg:text-base max-w-md mb-10 animate-slide-up font-light leading-relaxed">
          Demi-fine gold jewelry designed for the modern woman. Pieces that move with you — from morning light to evening glow.
        </p>
        <Link
          to="/shop"
          className="btn-primary text-xs tracking-widest animate-slide-up"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-cream/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-cream/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
