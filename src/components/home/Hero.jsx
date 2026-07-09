import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          data-strk-bg-id="velmora-hero-bg"
          data-strk-bg="gold jewelry luxury warm lighting editorial closeup"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-950/60 via-velmora-950/30 to-velmora-950/70" />
      </div>

      {/* Content */}
      <div className="relative h-full container-wide flex flex-col items-center justify-center text-center text-white">
        <span className="text-overline uppercase tracking-overline text-gold-light mb-4 animate-fade-in">
          Demi-Fine Jewelry
        </span>
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-display font-light leading-tight text-balance max-w-3xl animate-fade-in"
          style={{ animationDelay: '0.15s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="mt-4 md:mt-6 text-sm md:text-body-lg text-velmora-200 max-w-xl animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          18K gold-plated jewelry designed for the modern woman. Hypoallergenic, timeless, and accessible luxury.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-velmora-950 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 group animate-fade-in"
          style={{ animationDelay: '0.45s' }}
        >
          Shop the Collection
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
