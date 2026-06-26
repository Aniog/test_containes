import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-bronze-light/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-bronze/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-700/30 blur-3xl" />
      </div>

      {/* Geometric accents */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-bronze-light rounded-lg rotate-45" />
        <div className="absolute bottom-40 right-40 w-60 h-60 border border-white/10 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-bronze-light animate-pulse" />
            <span className="text-bronze-light text-sm font-medium tracking-wide">
              Precision Metal Folding Solutions
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Engineered for
            <span className="block text-bronze-light">Precision Folding</span>
          </h1>

          <p className="text-lg md:text-xl text-navy-300 max-w-2xl mb-10 leading-relaxed">
            From double folding machines to sheet metal folders, ARTITECT MACHINERY delivers
            industrial-grade precision and reliability for every metal fabrication need.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center px-8 py-4 rounded-md bg-bronze-light text-white font-semibold hover:bg-bronze transition-all duration-300 shadow-lg hover:shadow-xl text-base"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-md border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-bg to-transparent" />
    </section>
  );
}