import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)]/60 via-[var(--color-charcoal)]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container">
        <div className="flex items-center h-full">
          <div className="max-w-xl">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-warm-white)] mb-6 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be Treasured
            </h1>
            <p 
              className="font-sans text-lg md:text-xl text-[var(--color-warm-white)]/80 mb-8 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Discover our collection of demi-fine gold jewelry. 
              Elegant pieces designed for the modern woman who appreciates 
              quiet luxury and timeless style.
            </p>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/shop">
                <Button variant="accent" size="lg">
                  Shop the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-warm-white)]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--color-warm-white)]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;