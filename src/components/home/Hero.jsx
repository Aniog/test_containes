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
        data-strk-bg-id="hero-bg-vm01a2b3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-2xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-cream/80 text-sm md:text-base font-sans max-w-md mx-auto"
        >
          Demi-fine gold jewelry designed for everyday elegance
        </p>
        <Link
          to="/collection"
          className="inline-block mt-8 md:mt-10 bg-gold text-cream px-8 py-3 text-xs uppercase tracking-[0.2em] font-sans font-medium no-underline hover:bg-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
