import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-cream/80 text-xs tracking-[0.3em] uppercase mb-4">Demi-Fine Jewelry</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 text-cream/80 text-sm sm:text-base max-w-xl mx-auto">
          Modern heirlooms in 18K gold. Designed for everyday elegance and quiet luxury.
        </p>
        <div className="mt-8">
          <Link to="/shop">
            <Button variant="accent" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
