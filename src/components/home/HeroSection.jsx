import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561596112-0a132b757442?w=1920&h=1080&fit=crop&auto=format"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
          <div className="max-w-lg">
            <p className="text-brand-gold text-sm tracking-[0.2em] uppercase font-sans font-medium mb-4">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light">
              Crafted to be
              <br />
              <span className="font-semibold">Treasured</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 font-sans font-light leading-relaxed max-w-md">
              Demi-fine gold jewelry, designed for everyday elegance and made to last a lifetime.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/shop">
                <Button variant="default" size="lg">
                  Shop the Collection
                </Button>
              </Link>
              <Link to="/shop">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/60 text-white hover:bg-white hover:text-brand-dark"
                >
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}