import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdf8f0]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a3f9c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-stone-900/40" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-amber-300 font-semibold text-sm uppercase tracking-widest mb-4">
          Handcrafted with love
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Beautiful Tea Cups for Every Sip
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-stone-200 mb-10 leading-relaxed"
        >
          Artisan ceramic tea cups crafted to bring warmth and elegance to your daily tea ritual.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#shop"
            className="bg-amber-700 text-white hover:bg-amber-600 rounded-full px-8 py-4 font-semibold text-base transition-colors shadow-lg"
          >
            Explore the Collection
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white hover:bg-white hover:text-stone-900 rounded-full px-8 py-4 font-semibold text-base transition-colors"
          >
            Our Story
          </a>
        </div>
      </div>

      <a
        href="#shop"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
