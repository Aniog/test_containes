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
        data-strk-bg-id="hero-bg-velmora-x1y2z3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-4"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-base md:text-lg text-cream/80 font-sans mb-8 max-w-md"
          >
            Demi-fine gold jewelry designed for everyday elegance. Timeless pieces that tell your story.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-gold text-cream text-xs uppercase tracking-button font-medium hover:bg-gold-dark transition-all duration-300 no-underline"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
