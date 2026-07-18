import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1
          id="hero-title"
          className="serif-heading text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-white/90"
        >
          Demi-fine jewelry that elevates everyday moments into lasting memories
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
