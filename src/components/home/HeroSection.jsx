import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=80"
          alt="Velmora jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.25em] font-medium mb-4 opacity-90">
          New Collection
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-5 text-sm md:text-base text-white/80 max-w-md leading-relaxed">
          Demi-fine gold jewelry designed for everyday elegance and moments worth remembering.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-accent text-white uppercase text-xs tracking-widest font-medium px-10 py-4 hover:bg-accent-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}