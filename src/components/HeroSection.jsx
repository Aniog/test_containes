import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from './Navbar';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-stone-800"
        data-strk-bg-id="hero-bg-a3f9c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto">
        <p
          className="text-amber-300 text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Welcome to Equine Estate
        </p>

        <h1
          id="hero-title"
          className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Spirit of the<br />
          <span className="text-amber-300">Open Range</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Discover the beauty, grace, and power of horses. From majestic thoroughbreds
          to gentle trail companions, explore the world of equestrian excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="bg-amber-600 hover:bg-amber-500 text-white rounded-full px-8 py-3 font-semibold text-base transition-all shadow-lg hover:shadow-amber-500/30"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore Breeds
          </a>
          <a
            href="#"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 rounded-full px-8 py-3 font-semibold text-base transition-all"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View Gallery
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll to explore</span>
          <div className="w-px h-10 bg-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
