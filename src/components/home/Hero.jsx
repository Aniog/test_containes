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
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-vm01a2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 md:mt-6 text-cream/80 text-base md:text-lg font-sans font-light leading-relaxed"
          >
            Demi-fine gold jewelry designed for everyday elegance. Timeless pieces that tell your story.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-cream px-10 py-4 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
