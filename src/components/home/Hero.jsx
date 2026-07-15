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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-espresso/40 via-brand-espresso/30 to-brand-espresso/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <p className="font-sans text-[11px] tracking-super-wide uppercase text-white/60 mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wider leading-[1.1] animate-fade-in"
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-white/60 mt-6 tracking-wide max-w-lg mx-auto animate-fade-in"
        >
          Demi-fine gold jewelry for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 bg-brand-gold text-white font-sans text-xs tracking-super-wide uppercase px-12 py-4 hover:bg-brand-gold-dark transition-all duration-300 hover:tracking-[0.25em] animate-fade-in"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="w-px h-10 bg-white/30 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
