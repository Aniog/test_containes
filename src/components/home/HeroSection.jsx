import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

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
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto pt-20">
        <span className="inline-block bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6 border border-[#00d4ff]/20">
          The Invisible World
        </span>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f0f9ff] leading-tight tracking-tight mb-6"
        >
          Micro<span className="text-[#00d4ff]">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking universe hidden beneath the lens — where bacteria dance, fungi bloom, and life thrives in forms beyond imagination.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="bg-[#00d4ff] text-[#050d1a] font-bold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors text-base"
          >
            Explore the Gallery
          </a>
          <a
            href="#about"
            className="border border-[#00d4ff]/50 text-[#00d4ff] font-semibold px-8 py-3.5 rounded-full hover:bg-[#00d4ff]/10 transition-colors text-base"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#94a3b8] hover:text-[#00d4ff] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
