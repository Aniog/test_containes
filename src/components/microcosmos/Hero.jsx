import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="explore"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 grayscale"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p id="hero-subtitle" className="text-neutral-400 text-sm uppercase tracking-widest mb-6">
          The invisible world beneath us
        </p>
        <h1 id="hero-title" className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none mb-8">
          MICRO<br />COSMOS
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          A journey into the hidden universe of microscopic life — where every drop of water
          holds an entire civilization, and the smallest creatures shape our world.
        </p>
        <button
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-white text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Begin Exploring
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
