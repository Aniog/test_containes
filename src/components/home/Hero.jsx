import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.15em] mb-6 font-['Cormorant_Garamond']">
          CRAFTED TO BE
          <br />
          <span className="font-normal">TREASURED</span>
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wider mb-12 opacity-90">
          Timeless pieces for life's most precious moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-transparent border-2 border-white text-white px-12 py-4 text-sm tracking-[0.2em] hover:bg-white hover:text-gray-900 transition-all duration-500"
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
