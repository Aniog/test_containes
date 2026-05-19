import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black flex flex-col justify-end overflow-hidden">
      {/* Full-bleed hero background image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-strk-bg-id="hero-bg-mc7e3b"
        data-strk-bg="colorful fluorescent microscopy cells biology abstract [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="text-white font-black text-xl tracking-widest uppercase">MicroCosmos</span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#explore" className="hover:text-white transition-colors">Explore</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#worlds" className="hover:text-white transition-colors">Worlds</a>
          <a href="#science" className="hover:text-white transition-colors">Science</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors">
          Discover
        </button>
      </nav>

      {/* Hero text */}
      <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28">
        <p id="hero-subtitle" className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
          The Invisible Universe Beneath Our Feet
        </p>
        <h1 id="hero-title" className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none mb-6">
          Micro<br />Cosmos
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl max-w-xl mb-8">
          Journey into the breathtaking world of the infinitely small — where life thrives in every drop of water, every grain of soil, every breath of air.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#explore">
            <button className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-neutral-200 transition-colors">
              Begin the Journey
            </button>
          </a>
          <a href="#gallery">
            <button className="border border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
              View Gallery
            </button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
