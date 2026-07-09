import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] bg-velmora-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/30 to-velmora-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative h-full container-velmora flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl animate-fade-in">
          {/* Subtitle */}
          <p className="text-velmora-gold text-sm tracking-widest mb-6 font-light">
            DEMI-FINE JEWELRY
          </p>

          {/* Headline */}
          <h1
            className="font-serif text-5xl md:text-7xl text-velmora-cream mb-6 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Crafted to be
            <br />
            <em className="italic">Treasured</em>
          </h1>

          {/* Subhead */}
          <p className="text-velmora-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Timeless pieces designed for the modern woman. Each creation tells a story of
            quiet luxury and understated elegance.
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold text-velmora-cream px-12 py-4 text-sm tracking-widest hover:bg-velmora-gold-dark transition-colors btn-premium"
          >
            SHOP THE COLLECTION
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-velmora-gold/50" />
        </div>
      </div>
    </section>
  );
}
