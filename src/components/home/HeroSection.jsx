import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141589-67f0d753c769?w=1920&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg animate-fade-up">
            <p className="text-gold text-xs uppercase tracking-superwide font-medium mb-4">
              New Collection
            </p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide leading-tight">
              Crafted to be
              <br />
              <span className="text-gold">Treasured</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 font-light max-w-md leading-relaxed">
              Demi-fine gold jewelry, handcrafted for the woman who values quiet
              luxury and enduring design.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white uppercase tracking-widest text-xs px-8 py-3.5 hover:bg-gold-dark transition-all duration-300"
              >
                Shop the Collection
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/collections"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white uppercase tracking-widest text-xs px-8 py-3.5 hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}