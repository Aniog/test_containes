import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Demi-Fine Collection
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] mb-6 animate-fade-in-up stagger-1">
            Crafted to be
            <br />
            <span className="italic font-light">Treasured</span>
          </h1>

          {/* Subheadline */}
          <p className="text-ivory/80 text-base md:text-lg max-w-md mb-8 leading-relaxed animate-fade-in-up stagger-2">
            Timeless elegance meets modern sensibility. Handcrafted 18K gold plated 
            jewelry designed for the moments that matter.
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300 animate-fade-in-up stagger-3 group"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-ivory/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
