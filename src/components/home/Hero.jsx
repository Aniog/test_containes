import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
          Crafted to be<br />
          <span className="font-medium">Treasured</span>
        </h1>

        <p className="text-lg md:text-xl font-light mb-12 tracking-wide max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for everyday elegance.<br />
          Each piece tells a story of craftsmanship and intention.
        </p>

        <Link
          to="/shop"
          className="inline-block bg-transparent border-2 border-white text-white px-12 py-4 text-sm tracking-[0.3em] hover:bg-white hover:text-velmora-black transition-all duration-500"
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/50" />
      </div>
    </section>
  );
}
