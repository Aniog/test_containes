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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="serif-heading text-4xl md:text-6xl lg:text-7xl text-[#faf8f5] mb-4 md:mb-6 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base text-[#faf8f5]/80 mb-8 md:mb-10 tracking-wide font-light"
        >
          Demi-fine gold jewelry for the modern woman. Thoughtfully designed, beautifully made.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-primary text-[#1a1a1a] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#b8944f] transition-all duration-300 hover:shadow-lg"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-[#faf8f5]/50" />
      </div>
    </section>
  );
}
