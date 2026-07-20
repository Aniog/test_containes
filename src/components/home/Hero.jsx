import React from 'react';
import { Link } from 'react-router-dom';
import { useImageLoader } from '@/hooks/useImageLoader';

const Hero = () => {
  const containerRef = useImageLoader();
  const titleId = 'hero-title';
  const subtitleId = 'hero-subtitle';

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-stone-900"
        data-strk-bg-id="hero-bg"
        data-strk-bg={`[${subtitleId}] [${titleId}]`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-stone-900/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="max-w-2xl">
          <p
            id={subtitleId}
            className="font-sans text-xs md:text-sm uppercase tracking-widest text-white/90 mb-4"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id={titleId}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6"
          >
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-base md:text-lg text-white/80 mb-8 max-w-md">
            Timeless designs in 18K gold plate, made for everyday luxury and gifts that matter.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-gold-500 text-white font-sans text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
