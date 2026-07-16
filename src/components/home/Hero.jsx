import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl animate-fade-in">
          <p className="font-sans text-xs md:text-sm tracking-mega-wide uppercase text-gold-300 mb-4">
            Premium Demi-Fine Jewelry
          </p>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>

          <p className="font-sans text-sm md:text-base text-cream-200 max-w-lg mx-auto mb-8 leading-relaxed">
            Discover our collection of 18K gold-plated jewelry, designed for the modern woman
            who appreciates timeless elegance and everyday luxury.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 font-sans text-sm tracking-ultra-wide uppercase hover:bg-gold-600 transition-all duration-300 group"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-cream-300/50 animate-pulse" />
      </div>
    </section>
  );
}
