import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry on model warm light editorial luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/30 to-velmora-bg/95" />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-3xl animate-slide-up">
        <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-6 font-medium">
          Handcrafted 18K Gold Plated Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream font-light leading-[1.1] mb-6">
          Crafted to be
          <br />
          <em className="italic text-velmora-gold">Treasured</em>
        </h1>
        <p className="text-velmora-text-secondary text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10">
          Discover demi-fine jewelry designed for the modern woman — 
          accessible luxury that shines from morning to midnight.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-velmora-gold text-velmora-bg text-sm tracking-[0.2em] uppercase font-semibold hover:bg-velmora-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-velmora-gold/20"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-velmora-text-secondary">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-gold to-transparent" />
      </div>
    </section>
  );
}
