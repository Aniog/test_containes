import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-velmora-dark via-[#2A2420] to-velmora-dark">
        {/* Warm gold glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-dark/80 via-velmora-dark/30 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-velmora-gold/10 blur-3xl" />
      </div>

      {/* Decorative line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-velmora-gold/20 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up">
        <p className="text-velmora-gold-light/70 text-xs md:text-sm tracking-super uppercase mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight tracking-wide mb-6">
          Crafted to be<br className="hidden md:block" /> Treasured
        </h1>
        <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-10">
          Heirloom-quality gold jewelry at an accessible price. Designed for the woman who knows that elegance lives in the details.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-10 py-4 bg-velmora-gold text-white text-xs tracking-widest uppercase hover:bg-velmora-gold-deep transition-all duration-500 shadow-lg shadow-velmora-gold/20"
        >
          Shop the Collection
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/20 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
