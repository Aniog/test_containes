import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-rugby-dark"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rugby-dark/70 via-rugby-dark/50 to-rugby-dark/90" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-rugby-gold" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
        <div className="inline-block bg-rugby-gold/20 border border-rugby-gold/40 text-rugby-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          专业橄榄球俱乐部
        </div>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4"
        >
          AB橄榄球CD
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10"
        >
          力量、速度、团队精神 — 我们不只是在比赛，我们在书写传奇
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-rugby-gold text-rugby-dark font-bold px-8 py-3.5 rounded-full text-base hover:bg-rugby-gold-light transition-colors"
          >
            了解球队
          </a>
          <a
            href="#schedule"
            className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-base hover:bg-white hover:text-rugby-dark transition-colors"
          >
            查看赛程
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-rugby-gold transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
