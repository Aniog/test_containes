import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-strk-bg-id="hero-bg-velmora-x9y8z7"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight animate-fade-in"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base text-white/80 font-sans font-light max-w-md mx-auto animate-slide-up"
        >
          Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-brand-gold text-white px-10 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-brand-gold-light transition-all duration-300 animate-slide-up"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
