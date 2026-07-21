import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80')",
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-[#1A1A1A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1
          className="text-5xl md:text-7xl font-light mb-6 leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="text-base md:text-lg mb-10 text-white/80 font-light max-w-md mx-auto">
          Demi-fine gold jewelry for the modern woman. Designed for everyday luxury, priced for real life.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-[#C9A96E] text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#A6884A] transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <div className="w-px h-12 bg-white/30 mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      </div>
    </section>
  );
}
