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
        data-strk-bg-id="hero-bg-velmora-x9y8z7"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-sm md:text-base font-light text-cream/80 max-w-lg mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless pieces at an accessible luxury price point.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 px-10 py-3.5 bg-gold text-cream text-xs uppercase tracking-product font-medium hover:bg-gold-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
