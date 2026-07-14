import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-light mb-6 leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Crafted to be
          <br />
          <em>Treasured</em>
        </h1>

        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Demi-fine gold jewelry for the modern heirloom. Designed to be worn,
          loved, and passed down.
        </p>

        <Link
          to="/shop"
          className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-velmora-black transition-all duration-500"
        >
          Shop the Collection
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/60" />
      </div>
    </section>
  );
}