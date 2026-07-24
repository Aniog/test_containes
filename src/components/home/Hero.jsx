import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] sm:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry luxury editorial warm lighting close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-espresso"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        {/* Warm tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-xs sm:text-sm tracking-mega-wide uppercase text-gold-light mb-4 sm:mb-6 font-sans font-medium">
          Fine Jewelry Collection
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-light leading-[1.1] mb-5 sm:mb-6">
          Crafted to be
          <br />
          <span className="italic font-light">Treasured</span>
        </h1>
        <p className="text-sm sm:text-base text-white/70 font-light max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
          Demi-fine 18K gold-plated jewelry designed for the modern woman.
          Premium quality, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-gold text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/20"
        >
          Shop the Collection
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/40 animate-pulse" />
      </div>
    </section>
  );
}
