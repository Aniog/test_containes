import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light italic mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl mb-12 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine gold jewelry for the modern woman who values quiet luxury and timeless elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 font-sans text-sm tracking-widest uppercase hover:bg-white hover:text-velmora-charcoal transition-all duration-500"
        >
          Shop the Collection
          <ArrowRight className="inline-block ml-2 -mb-1" size={18} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
