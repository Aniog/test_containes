import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-velmora-deep"
        data-strk-bg-id="hero-bg-a7c3f1"
        data-strk-bg="gold jewelry close up warm lighting elegant model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-container w-full">
        <div className="max-w-xl">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold-light mb-4 animate-fade-in">
            Premium Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-display md:text-[5rem] text-white mb-6 animate-slide-up">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-base md:text-lg text-white/70 mb-8 max-w-md leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
            18K gold-plated jewelry designed for the modern woman. Hypoallergenic, timeless, and made to be worn every day.
          </p>
          <Link to="/shop" className="btn-primary animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-velmora-cream to-transparent" />
    </section>
  );
}
