import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] md:h-[92vh] overflow-hidden">
      {/* Background image placeholder - warm gold jewelry on model */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900"><rect fill="%232C2420" width="1440" height="900"/><ellipse cx="700" cy="450" rx="500" ry="350" fill="%233D322B" opacity="0.6"/><circle cx="650" cy="400" r="180" fill="%23C9A96E" opacity="0.15"/><circle cx="850" cy="500" r="120" fill="%23C9A96E" opacity="0.1"/></svg>')`,
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <p className="text-velmora-goldlight text-xs md:text-sm tracking-[0.35em] uppercase font-medium mb-4 md:mb-6">
          New Collection — Summer 2026
        </p>
        <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 md:mt-6 text-velmora-sand text-sm md:text-base max-w-md leading-relaxed font-light">
          Demi-fine jewelry designed for everyday luxury. Ethically crafted, consciously priced.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block bg-velmora-gold text-white px-8 md:px-10 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-velmora-golddark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
