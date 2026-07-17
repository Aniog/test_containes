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
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-strk-bg-id="hero-bg-vel-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl font-light text-white mb-4 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 text-base md:text-lg font-light mb-8 max-w-xl mx-auto"
        >
          Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3.5 bg-gold text-white text-sm uppercase tracking-widest font-medium hover:bg-gold-dark transition-all duration-300 no-underline"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
