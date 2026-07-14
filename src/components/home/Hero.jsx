import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-wide mb-4 md:mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed font-light">
          Demi-fine jewelry designed for the modern woman. Each piece is thoughtfully crafted to be worn every day and cherished for a lifetime.
        </p>
        <Link to="/shop">
          <Button size="lg" className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f0] shadow-lg hover:shadow-xl transition-all duration-300">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
