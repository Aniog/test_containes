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
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/30 via-velmora-charcoal/20 to-velmora-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-base md:text-lg mb-10 tracking-wide opacity-90 max-w-xl mx-auto">
          Demi-fine gold jewelry designed for everyday luxury.<br />
          Each piece tells a story of craftsmanship and intention.
        </p>
        <Link
          to="/shop"
          className="btn-premium inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
}
