import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/70 via-velmora-black/50 to-velmora-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-h1 text-velmora-text mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-velmora-muted text-lg md:text-xl max-w-xl mx-auto mb-10 animate-slide-up delay-200">
          Premium demi-fine jewelry for the modern woman. Elegant pieces designed to be worn and cherished every day.
        </p>
        <Link to="/collections" className="inline-block animate-slide-up delay-300">
          <Button variant="primary" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-muted rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-muted rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;