// Velmora Fine Jewelry - Hero Component
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop"
          alt="Velmora Fine Jewelry - Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-custom flex items-center">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p
            className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Demi-Fine Jewelry
          </p>
          
          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Crafted to be Treasured
          </h1>
          
          {/* Subheadline */}
          <p
            className="text-base md:text-lg text-white/80 mb-8 max-w-md leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Elevate everyday moments with our handcrafted gold-plated jewelry. 
            Designed for the modern woman who appreciates quiet luxury.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/collections/all"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-widest text-[#1A1A1A] bg-white hover:bg-[#B8860B] hover:text-white transition-all duration-300"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
