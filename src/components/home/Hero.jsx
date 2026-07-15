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
        className="absolute inset-0 bg-brand-charcoal"
        data-strk-bg-id="hero-bg-v3l9m0r4"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-white/80 mb-8 max-w-lg mx-auto"
        >
          Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-brand-gold text-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-brand-gold-light transition-all duration-300 no-underline"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
