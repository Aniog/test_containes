import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-gold text-xs md:text-sm uppercase tracking-[0.15em] mb-4">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#f5f0eb] leading-tight mb-6">
              Crafted to be
              <br />
              <span className="text-gold">Treasured</span>
            </h1>
            <p className="text-base md:text-lg text-[#a09890] max-w-md mb-8 leading-relaxed">
              Demi-fine gold jewelry for the woman who values quiet elegance. Each piece, a statement of timeless beauty.
            </p>
            <Link
              to="/shop"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}