import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="text-white font-bold text-xl tracking-wide">Animal Kingdom</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/90 font-medium text-sm">
          <a href="#animals" className="hover:text-[#e9c46a] transition-colors">Animals</a>
          <a href="#facts" className="hover:text-[#e9c46a] transition-colors">Fun Facts</a>
          <a href="#habitats" className="hover:text-[#e9c46a] transition-colors">Habitats</a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p id="hero-subtitle" className="text-[#e9c46a] font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
          Explore the wonders of nature
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          The Animal Kingdom
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover the incredible diversity of life on Earth — from the depths of the ocean to the peaks of the mountains.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#animals"
            className="bg-[#2d6a4f] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1b4332] transition-colors text-base"
          >
            Explore Animals
          </a>
          <a
            href="#facts"
            className="bg-[#e9c46a] text-[#1c1c1c] font-semibold px-8 py-3 rounded-full hover:bg-[#f4a261] transition-colors text-base"
          >
            Fun Facts
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
