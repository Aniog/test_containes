import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-base-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-base-cream mb-6 tracking-wide animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-base-cream/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Demi-fine jewelry designed for the modern woman. Quiet luxury, warm and timeless.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-base-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-base-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
