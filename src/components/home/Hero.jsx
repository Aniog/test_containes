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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base tracking-wide mb-8 md:mb-10 text-white/90 max-w-xl mx-auto"
        >
          Demi-fine gold jewelry designed for everyday luxury. From studio to your doorstep, with care.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-accent text-accent-foreground px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:shadow-xl"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
