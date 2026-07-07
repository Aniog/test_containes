import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden bg-surface-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-background-main"
          data-strk-bg="luxury gold jewelry close up warm lighting on dark background editorial photography"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-primary/40 via-surface-primary/20 to-surface-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-primary/50 via-transparent to-surface-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-3xl mx-auto">
        <p className="font-sans text-overline uppercase text-brand-gold mb-6 animate-fade-in">
          18K Gold Plated · Handcrafted with Care
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-display text-text-primary mb-6 animate-slide-up tracking-[0.04em]">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-body-lg text-text-primary/70 mb-10 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '150ms' }}>
          Demi-fine jewelry that feels luxurious without the luxury price tag. 
          Designed for everyday elegance, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-brand-gold text-surface-primary font-sans text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-sm hover:bg-brand-gold-light transition-all duration-300 font-medium shadow-gold animate-slide-up"
          style={{ animationDelay: '300ms' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={20} className="text-text-primary/40" />
      </div>
    </section>
  );
}
