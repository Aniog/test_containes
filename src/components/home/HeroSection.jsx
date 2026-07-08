import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-6 animate-fade-in-up">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-md mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Timeless pieces designed for the modern woman. Elevate every moment
          with jewelry that speaks quietly of luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-gold text-charcoal text-xs uppercase tracking-[0.2em] font-semibold hover:bg-goldlight transition-colors animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
