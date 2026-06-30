import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream-50 mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-cream-200 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Each piece tells a story of quiet luxury and timeless elegance.
        </p>
        <Link to="/shop">
          <Button variant="accent" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-300/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream-300/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
