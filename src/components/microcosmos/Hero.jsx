import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #2dd4bf 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Welcome to the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Micro<span className="text-teal-400">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the breathtaking universe hidden beneath the lens — where bacteria dance, crystals bloom, and life pulses in forms beyond imagination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-8 py-4 rounded-full transition-colors text-base shadow-[0_0_30px_rgba(45,212,191,0.4)]"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-4 rounded-full transition-colors text-base"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-400 hover:text-teal-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
