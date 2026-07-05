import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-soft-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide animate-fade-up">
          Crafted to be<br />
          <span className="font-normal">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide opacity-90 animate-fade-up">
          Demi-fine jewelry for life's most meaningful moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 
                   text-sm uppercase tracking-widest hover:bg-white hover:text-velmora-soft-black 
                   transition-all duration-500 animate-fade-up"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="w-0.5 h-12 bg-white/50" />
      </div>
    </section>
  );
}
