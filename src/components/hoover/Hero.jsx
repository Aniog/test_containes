import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToOverview = () => {
    document.querySelector('#overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-hd001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navyBlack/70 via-navyBlack/50 to-navyBlack" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-accentGold text-sm uppercase tracking-[0.3em] mb-4 font-sans">
          美国国家历史地标
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-warmWhite leading-tight mb-6"
        >
          胡佛大坝
        </h1>
        <p
          id="hero-subtitle"
          className="text-mutedBlue text-lg md:text-2xl font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          科罗拉多河上的钢铁奇迹 — 一座改变了美国西部命运的伟大工程
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToOverview}
            className="px-8 py-3 bg-accentGold text-navyBlack font-semibold rounded-full hover:bg-accentLight transition-colors text-sm tracking-wide"
          >
            探索历史
          </button>
          <button
            onClick={() => document.querySelector('#engineering')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-accentGold/60 text-accentGold font-semibold rounded-full hover:bg-accentGold/10 transition-colors text-sm tracking-wide"
          >
            工程奇迹
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToOverview}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accentGold/60 hover:text-accentGold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
