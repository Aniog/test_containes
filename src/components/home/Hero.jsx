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
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f2a1c"
        data-strk-bg="[hero-subhead] [hero-headline] gold jewelry model editorial warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fadeIn">
        <p className="font-inter text-xs uppercase tracking-[0.25em] text-gold-light mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.05] tracking-wide"
        >
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-inter text-sm md:text-base text-ivory/75 mt-6 leading-relaxed max-w-md mx-auto"
        >
          Timeless pieces for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/shop"
            className="bg-gold text-ivory font-inter text-xs uppercase tracking-[0.15em] px-10 py-4 hover:bg-gold-dark transition-colors duration-300 min-w-[200px] text-center"
          >
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="border border-ivory/60 text-ivory font-inter text-xs uppercase tracking-[0.15em] px-10 py-4 hover:border-gold hover:text-gold transition-colors duration-300 min-w-[200px] text-center"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn">
        <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-ivory/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
