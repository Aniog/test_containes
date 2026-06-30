import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-charcoal-950/20 to-charcoal-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 py-32 md:py-0">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream-50 mb-6 leading-tight animate-slide-up">
            Crafted to be Treasured
          </h1>
          <p className="text-cream-200/90 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Demi-fine gold jewelry designed for the moments that matter. 
            Each piece, a timeless treasure waiting to be worn.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link to="/shop" className="btn-accent inline-block">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-50/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream-50/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
