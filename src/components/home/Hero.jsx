import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&q=80"
          alt="Velmora jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-in">
          Crafted to be<br />
          <span className="italic">Treasured</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in stagger-1">
          Timeless demi-fine gold jewelry for the moments that matter most.
        </p>
        <div className="animate-fade-in stagger-2">
          <Link to="/shop">
            <Button variant="primary" size="lg" className="bg-white text-velmora-charcoal hover:bg-velmora-cream">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
