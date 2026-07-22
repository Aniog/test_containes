import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velvet-950">
        <div className="absolute inset-0 bg-gradient-to-br from-velvet-900 via-velvet-950 to-velvet-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 to-transparent" />
        {/* Warm gold accent glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-warm-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-warm-500/8 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-5">
        <p className="font-sans text-xs tracking-super-wide uppercase text-warm-400 mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-none mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-velvet-200 max-w-md mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Demi-fine jewelry in 18K gold plate. Designed for the moments that matter — and all the ones in between.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-sans text-xs tracking-widest uppercase px-12 py-4 transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-9 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
