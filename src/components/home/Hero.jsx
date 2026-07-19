import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-9j2a1"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-neutral-900"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wide mb-10 opacity-90 max-w-2xl mx-auto">
          Demi-fine gold jewelry designed for your everyday and your most extraordinary moments.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/shop">
            <Button size="lg" className="px-10">Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
