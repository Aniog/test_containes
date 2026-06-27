import React from 'react';
import { Link } from 'react-router-dom';
import { useImageLoader } from '@/hooks/useImageLoader';

const HeroSection = () => {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/40 via-velmora-charcoal/20 to-velmora-charcoal/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p
          id="hero-subtitle"
          className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 text-white/90"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light max-w-4xl mb-8"
        >
          Crafted to be Treasured
        </h1>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-velmora-gold-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
