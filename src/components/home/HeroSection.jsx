import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-mc9f2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-[#00d4c8] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6">
          The Invisible World Revealed
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f0f4ff] leading-none tracking-tight mb-6"
        >
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#8ba3c7] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking universe hidden beneath the lens — where bacteria, crystals, cells, and insects reveal nature's most intricate masterpieces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="bg-[#00d4c8] text-[#050a14] font-bold px-8 py-4 rounded-full text-base hover:bg-[#00bfb4] transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,212,200,0.4)]"
          >
            Explore the Gallery
          </a>
          <a
            href="#about"
            className="border border-[#1e3050] text-[#f0f4ff] font-semibold px-8 py-4 rounded-full text-base hover:border-[#00d4c8]/60 hover:text-[#00d4c8] transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8ba3c7] hover:text-[#00d4c8] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
