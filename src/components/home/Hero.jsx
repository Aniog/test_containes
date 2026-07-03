import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/40 via-velmora-charcoal/20 to-velmora-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up">
        <h1
          className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
          Premium demi-fine jewelry designed for the modern woman. 
          Elevate every moment with pieces that feel like forever.
        </p>
        <Link to="/collection">
          <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-velmora-espresso">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
