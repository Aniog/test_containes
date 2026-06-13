import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with stock image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title] industrial machinery manufacturing"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Decorative accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-bronze" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-bronze/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-24 pb-16">
        <span className="inline-block text-bronze text-xs uppercase tracking-[0.3em] font-semibold mb-6">
          Precision Engineering Since 1998
        </span>

        <h1
          id="hero-title"
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-off-white leading-[1.1] mb-6 text-shadow-gold"
        >
          Crafting Excellence
          <br />
          <span className="text-gold">in Metal Folding</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-muted-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Industry-leading double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-bronze text-white text-sm font-semibold uppercase tracking-wider hover:bg-gold transition-colors duration-200"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-off-white/20 text-off-white text-sm font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors duration-200"
          >
            Contact Sales
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => document.querySelector('#products').scrollIntoView({ behavior: 'smooth' })}
          className="text-muted-gray hover:text-gold transition-colors duration-200 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
