import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Crafted to be
          <br />
          <span className="font-normal">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto leading-relaxed opacity-90">
          Demi-fine gold jewelry for the modern woman.
          <br />
          Quiet luxury, thoughtfully crafted.
        </p>
        <Link
          to="/shop"
          className="btn-premium btn-premium-outline border-white text-white hover:bg-white hover:text-charcoal-900 inline-flex items-center gap-2"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
