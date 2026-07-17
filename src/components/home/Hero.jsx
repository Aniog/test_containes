import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-ivory/70 text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Demi-Fine Gold Jewelry
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>

          {/* Subheadline */}
          <p className="text-ivory/80 text-base md:text-lg mb-8 max-w-md leading-relaxed font-body">
            Timeless pieces designed for the modern woman. 18K gold-plated jewelry that elevates every moment.
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ivory text-espresso font-body font-medium text-sm tracking-wide hover:bg-cream transition-all duration-300 group"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-ivory/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
