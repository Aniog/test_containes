import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#fdf8f0]/95 via-[#fdf8f0]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 py-24">
        <div className="max-w-xl">
          <span className="inline-block text-green-700 text-sm font-medium uppercase tracking-widest mb-4">
            🌿 Fresh. Living. Beautiful.
          </span>
          <h1
            id="hero-title"
            className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-[#5c3d2e] leading-tight mb-6"
          >
            Bring Nature<br />Into Your Home
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-[#7a5c4a] mb-8 leading-relaxed"
          >
            Discover our handpicked collection of live flowering plants — grown with love and delivered fresh to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#plants"
              className="bg-green-700 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-green-800 transition-colors text-center shadow-lg"
            >
              Explore Plants
            </a>
            <a
              href="#about"
              className="border-2 border-[#5c3d2e] text-[#5c3d2e] px-8 py-4 rounded-full font-medium text-base hover:bg-[#5c3d2e] hover:text-white transition-colors text-center"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#plants"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#7a5c4a] hover:text-green-700 transition-colors"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
