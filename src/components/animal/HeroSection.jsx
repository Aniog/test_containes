import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-6">
        <span className="text-white font-bold text-xl tracking-widest uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
          Animal Kingdom
        </span>
        <div className="hidden md:flex gap-8 text-white/90 text-sm font-medium tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
          <a href="#habitats" className="hover:text-white transition-colors">Habitats</a>
          <a href="#featured" className="hover:text-white transition-colors">Featured</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#facts" className="hover:text-white transition-colors">Facts</a>
          <a href="#conservation" className="hover:text-white transition-colors">Conservation</a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-amber-300 uppercase tracking-[0.3em] text-sm font-medium mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Discover the wonders of the natural world
        </p>
        <h1
          id="hero-title"
          className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          The Animal Kingdom
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          From the depths of the ocean to the peaks of the mountains — explore the breathtaking diversity of life on Earth.
        </p>
        <a
          href="#habitats"
          className="inline-block bg-amber-400 hover:bg-amber-300 text-stone-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide uppercase"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Explore Now
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
