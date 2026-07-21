import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] md:min-h-[700px] overflow-hidden -mt-16 md:-mt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=1600&auto=format&fit=crop&q=80"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-950/70 via-midnight-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-cream-200/80 text-xs md:text-sm tracking-widest uppercase mb-4 font-sans">
              New Collection
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 font-light leading-tight tracking-wide">
              Crafted to be
              <br />
              <span className="italic font-light">Treasured</span>
            </h1>
            <p className="text-cream-200/80 text-sm md:text-base mt-4 max-w-md leading-relaxed font-sans font-light">
              Demi-fine gold jewelry, handcrafted for the woman who values quiet luxury and enduring beauty.
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                to="/shop"
                className="btn-primary bg-cream-50 text-midnight-900 hover:bg-cream-100"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="btn-outline border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-midnight-900"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}