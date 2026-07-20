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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-vel-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#2A2118' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 md:mt-6 text-base md:text-lg text-white/80 font-sans font-light leading-relaxed max-w-md"
          >
            Demi-fine gold jewelry designed for the modern woman. Timeless pieces at an accessible luxury price point.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-8 py-3.5 bg-gold text-white font-sans text-sm uppercase tracking-wider no-underline hover:bg-gold-dark transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
