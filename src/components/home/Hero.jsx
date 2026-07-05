import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />

      {/* Decorative gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-obsidian to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/80 mb-6">
          Handcrafted · 18K Gold Plated · Hypoallergenic
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-ivory leading-[1.1] mb-6">
          Crafted to be<br />
          <span className="text-gold italic">Treasured</span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-muted/80 max-w-lg mx-auto mb-10 leading-relaxed">
          Demi-fine gold jewelry designed for the modern woman. Premium quality, accessible luxury, made to wear every day.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300 group"
        >
          SHOP THE COLLECTION
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce-subtle">
        <div className="w-px h-8 bg-gold/30" />
      </div>
    </section>
  );
}
