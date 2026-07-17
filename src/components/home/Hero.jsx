import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=900&fit=crop&q=80"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase font-sans mb-6 opacity-80">
          Fine Jewelry Collection
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.1]">
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p className="text-sm sm:text-base font-sans text-white/80 max-w-md mx-auto mb-10 leading-relaxed">
          Discover our curated collection of demi-fine gold jewelry, designed
          for the modern woman who appreciates quiet luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-velmora-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/60 font-sans">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
