import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-velmora-charcoal via-velmora-dark to-velmora-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,164,92,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-velmora-cream/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-gold-light mb-6 animate-fade-in">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-velmora-cream leading-[1.1] mb-6 animate-slide-up">
            Crafted to be<br />Treasured
          </h1>
          <p className="font-sans text-base md:text-lg text-velmora-cream/60 leading-relaxed mb-10 max-w-md animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Gold-plated jewelry designed for the modern woman. Timeless pieces that elevate every moment.
          </p>
          <Link
            to="/shop"
            className="btn-primary animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-velmora-cream/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-velmora-cream/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}