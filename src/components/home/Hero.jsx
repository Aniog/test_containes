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
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-e1f2g3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-deep-brown/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-4"
          style={{ color: '#FAF7F2' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base mb-8 max-w-lg mx-auto"
          style={{ color: 'rgba(250, 247, 242, 0.8)' }}
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless elegance, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-3.5 bg-gold text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-light transition-colors no-underline"
          style={{ color: '#FAF7F2' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
