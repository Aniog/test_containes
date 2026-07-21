import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Demi-fine gold jewelry for life's meaningful moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 
                     hover:bg-white hover:text-gray-900 transition-all duration-500
                     text-sm uppercase tracking-wider font-medium"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
