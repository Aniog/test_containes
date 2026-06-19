import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg sm:text-xl mb-8 font-light max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry for life's most meaningful moments. 18K gold plated, hypoallergenic, and designed to last.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
