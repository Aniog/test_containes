import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-brand-espresso"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 md:pb-28 px-4 text-center">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base text-white/80 font-sans font-light tracking-wide max-w-lg"
        >
          Demi-fine gold jewelry designed for everyday elegance and lasting beauty
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-brand-gold text-white px-10 py-3.5 text-xs font-sans font-semibold tracking-ultra-wide uppercase hover:bg-brand-gold-dark transition-colors duration-200"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
