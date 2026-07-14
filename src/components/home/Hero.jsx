import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-espresso/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
          Crafted to be<br />
          <em className="font-light">Treasured</em>
        </h1>
        <p className="font-sans text-lg text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
          Demi-fine gold jewelry designed for life's everyday moments and milestone celebrations
        </p>
        <Link
          to="/shop"
          className="inline-block bg-transparent border-2 border-white text-white px-12 py-4 
                     font-sans text-sm uppercase tracking-widest
                     hover:bg-white hover:text-velmora-charcoal transition-all duration-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}
