import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FDFAF5]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2C1810]/70 via-[#2C1810]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <p id="hero-subtitle" className="text-[#F5F0E8] text-sm md:text-base font-medium tracking-widest uppercase mb-4 opacity-90">
            温馨家居 · 品质生活
          </p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            让每一个家，<br />都充满爱的温度
          </h1>
          <p className="text-[#F5F0E8] text-base md:text-lg leading-relaxed mb-8 opacity-90">
            维纯家居，专注于为每一个家庭提供高品质、有温度的家居用品。
            从精心挑选的材质到贴心的设计细节，我们只为让您的家更美好。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="bg-[#8B6F47] text-white rounded-full px-8 py-3 text-base font-medium hover:bg-[#C4714A] transition-colors text-center no-underline"
            >
              探索产品系列
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium hover:bg-white hover:text-[#2C1810] transition-colors text-center no-underline"
            >
              了解我们
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70">
        <span className="text-xs tracking-widest">向下滚动</span>
        <div className="w-px h-8 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}
