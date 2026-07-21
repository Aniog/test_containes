import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Demi-fine jewelry for life's most meaningful moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#C9A96E] text-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#A8843E] transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
