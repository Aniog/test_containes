import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
          Crafted to be<br />
          <span className="font-normal">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light tracking-wide">
          Demi-fine jewelry for every day, designed to last a lifetime
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-velmora-charcoal px-10 py-4 text-sm uppercase tracking-ultra-wide font-medium hover:bg-velmora-gold hover:text-white transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
