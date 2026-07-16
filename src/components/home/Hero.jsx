import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title] jewelry model lifestyle close up warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
      >
        <div className="absolute inset-0 bg-stone-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 
          id="hero-title" 
          className="text-white text-5xl md:text-7xl font-serif mb-8 leading-tight tracking-tight opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subtitle" 
          className="text-stone-200 text-lg md:text-xl font-serif italic mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Fine jewelry designed for your everyday moments.
        </p>
        <div 
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <Link 
            to="/shop" 
            className="btn-primary"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
