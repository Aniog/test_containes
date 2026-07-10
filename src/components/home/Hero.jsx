import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Velmora Fine Jewelry - Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 tracking-wide animate-fade-in">
          Crafted to be
          <br />
          <em className="font-serif italic">Treasured</em>
        </h1>
        <p className="font-sans text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Demi-fine jewelry for the modern romantic. Each piece tells a story of craftsmanship, 
          designed to be worn, loved, and passed down.
        </p>
        <Link
          to="/shop"
          className="btn-secondary bg-transparent border-cream text-cream hover:bg-cream hover:text-charcoal inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-0.5 h-12 bg-cream/50" />
      </div>
    </section>
  );
}