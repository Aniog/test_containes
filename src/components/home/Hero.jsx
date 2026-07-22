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

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 text-base md:text-lg font-light max-w-xl mx-auto mb-8"
        >
          Demi-fine gold jewelry designed for the moments that matter. Timeless elegance, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-brand-gold text-white px-10 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-brand-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
