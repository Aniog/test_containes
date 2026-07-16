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
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-x9y2z1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl text-white font-light leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto"
        >
          Demi-fine gold jewelry designed for the moments that matter. Timeless elegance, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-white px-10 py-3.5 text-sm tracking-wider uppercase font-sans font-medium hover:bg-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
