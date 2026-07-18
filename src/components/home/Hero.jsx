import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-velmora-cream">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 font-light">
          Demi-fine gold jewelry for life's everyday moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-10 py-4 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
