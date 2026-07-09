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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-x1y2z3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-base md:text-lg text-white/80 font-sans font-light max-w-xl mx-auto"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless pieces at an accessible luxury price point.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-white px-10 py-4 text-sm font-sans font-medium tracking-widest uppercase hover:bg-gold-light transition-colors no-underline rounded-sm"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
