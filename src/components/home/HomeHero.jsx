import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-bg-9912"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 scale-105"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 md:px-12 w-full max-w-7xl mx-auto pt-20">
        <div className="max-w-2xl text-white">
          <p id="hero-subtitle" className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-in slide-in-from-bottom duration-700">
            Timeless Demi-Fine Gold
          </p>
          <h1 id="hero-title" className="text-5xl md:text-8xl font-serif leading-tight mb-8 animate-in slide-in-from-bottom delay-100 duration-700">
            Crafted to be <br />
            <span className="italic">Treasured</span>
          </h1>
          <div className="animate-in slide-in-from-bottom delay-200 duration-700">
            <Link
              to="/shop"
              className="inline-flex items-center space-x-4 bg-accent hover:bg-accent/90 text-primary px-8 py-4 transition-all"
            >
              <span className="text-sm uppercase tracking-widest font-medium">Shop the Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-bounce">
        <div className="w-[1px] h-16 bg-white/30 relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-1/2 after:bg-white after:animate-scroll" />
      </div>
    </section>
  );
};

export default Hero;
