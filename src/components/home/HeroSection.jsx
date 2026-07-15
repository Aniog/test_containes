import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://image.pollinations.ai/prompt/warm%20lit%20close%20up%20gold%20jewelry%20on%20woman%20model%20editorial%20photography%20luxury?width=1600&height=1000&nologo=true"
          alt="Velmora jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-dark/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-90">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-3xl leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-5 text-sm md:text-base max-w-md opacity-90 font-light">
          Timeless pieces designed for the modern woman. Gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 px-10 py-4 bg-velmora-gold text-white text-sm uppercase tracking-widest hover:bg-white hover:text-velmora-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
