import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&h=1000&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-deep/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-text-on-dark/70 mb-6">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-on-dark font-light leading-[1.1] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="font-sans text-sm md:text-base text-text-on-dark/80 mb-10 max-w-md mx-auto leading-relaxed">
            Timeless designs in 18k gold-plated finishes, made for everyday elegance and moments that matter.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-accent-gold text-deep font-sans text-xs uppercase tracking-widest px-10 py-4 hover:bg-accent-gold-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-text-on-dark/30 animate-pulse" />
      </div>
    </section>
  );
}
