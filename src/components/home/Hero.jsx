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
      {/* Background */}
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora-x9y8z7"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-white/80 mb-8 font-light"
        >
          Demi-fine gold jewelry designed for everyday elegance
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-4 bg-gold text-white text-sm font-sans font-medium tracking-product uppercase no-underline hover:bg-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
