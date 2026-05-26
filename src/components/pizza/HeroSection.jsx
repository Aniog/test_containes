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
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p id="hero-subtitle" className="text-[#E67E22] font-semibold text-lg md:text-xl uppercase tracking-widest mb-4">
          Authentic Italian Flavors
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Pizza Made With<br />
          <span className="text-[#E67E22]">Passion</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Hand-tossed dough, fresh ingredients, and wood-fired perfection — every single slice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-[#C0392B] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#A93226] transition text-center"
          >
            See Our Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-[#1A1A1A] transition text-center"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
