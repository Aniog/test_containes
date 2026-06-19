import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141589-6777e5c4b5b8?w=1800&auto=format&q=85"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-12 max-w-5xl">
        <div className="animate-fade-in">
          <p className="text-gold text-xs uppercase tracking-[0.25em] font-sans mb-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-white/80 max-w-md mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Hand-finished pieces designed to elevate your everyday — from morning meetings to evening occasions.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-gold text-white px-10 py-4 font-sans font-medium text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-gold-hover opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-12 bg-white/40" />
      </div>
    </section>
  );
}