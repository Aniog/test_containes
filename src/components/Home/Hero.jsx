import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-velmora-cream">
      {/* Background with reliable placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://via.placeholder.com/1920x1080/FFF9F0/8B7355?text=Velmora+Fine+Jewelry"
          alt="Velmora Fine Jewelry - Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="heading-xl mb-6 font-light">
          Crafted to be<br />
          <span className="font-medium">Treasured</span>
        </h1>
        <p className="font-sans text-lg md:text-xl mb-10 font-light tracking-wide opacity-90">
          Timeless pieces for life's most precious moments
        </p>
        <Link
          to="/shop"
          className="btn-secondary border-white text-white hover:bg-white hover:text-velmora-charcoal inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}
