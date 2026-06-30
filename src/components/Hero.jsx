import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide opacity-90">
          Demi-fine gold jewelry for life's most meaningful moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 
                     transition-all duration-500 uppercase tracking-wider text-sm"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
