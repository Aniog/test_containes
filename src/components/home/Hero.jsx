import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="model wearing elegant gold jewelry warm light close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for text readability */}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-white uppercase tracking-[0.3em] text-xs md:text-sm mb-6 inline-block">
          The New Collection
        </span>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
          Demi-fine jewelry designed for the modern romantic. Everyday luxury that lives and breathes with you.
        </p>
        <Button 
          asChild 
          className="uppercase tracking-widest font-serif px-12 py-6 rounded-none bg-white text-velmora-dark hover:bg-velmora-gold hover:text-white transition-colors text-sm border-none"
        >
          <Link to="/collections/all">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;