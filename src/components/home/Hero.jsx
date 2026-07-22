import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] Velmora Fine Jewelry gold jewelry"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 tracking-wide"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl font-sans font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover demi-fine gold jewelry that blends timeless elegance with contemporary design. Each piece tells a story of refined craftsmanship.
          </p>
          <Link to="/shop">
            <Button variant="gold" size="lg" className="tracking-widest">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;