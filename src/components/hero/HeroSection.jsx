import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc01a7"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-dark/80 via-cosmos-dark/60 to-cosmos-dark" />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <p className="text-cosmos-cyan font-medium text-sm md:text-base tracking-widest uppercase mb-4">
          Discover the Invisible
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_0_30px_rgba(6,214,160,0.5)]"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-cosmos-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Journey into the breathtaking world hidden beneath our eyes. Explore the stunning beauty of microscopic life, from intricate cellular structures to vibrant microorganisms.
        </p>
        <a
          href="#gallery"
          className="inline-flex items-center gap-2 px-8 py-3 bg-cosmos-cyan/10 border border-cosmos-cyan/30 rounded-full text-cosmos-cyan font-medium hover:bg-cosmos-cyan/20 transition-all duration-300"
        >
          Begin Exploration
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
