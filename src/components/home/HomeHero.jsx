import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToBestsellers = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-brand-ink/30 to-brand-ink/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/70 mb-4 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-hero leading-tight mb-6 max-w-2xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-sm md:text-base text-white/70 max-w-md mb-10 leading-relaxed font-light">
          18K gold-plated pieces designed for the moments that matter — from everyday elegance to forever keepsakes.
        </p>
        <div className="flex gap-4">
          <Link to="/shop" className="btn-accent">Shop the Collection</Link>
          <Link to="/shop?category=Sets" className="btn-outline border-white text-white hover:bg-white hover:text-brand-ink">Shop Sets</Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToBestsellers}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}