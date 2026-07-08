import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Crafted to be<br />
          <em className="text-gold-light">Treasure</em>d
        </h1>
        <p className="text-lg md:text-xl mb-10 text-ivory/90 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for everyday luxury. Each piece is crafted with intention,
          using 18K gold plating for a lifetime of cherished moments.
        </p>
        <Link
          to="/shop"
          className="btn-gold inline-flex items-center gap-3 text-base px-8 py-4"
        >
          Shop the Collection
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="w-px h-12 bg-white/50"></div>
      </div>
    </section>
  );
}
