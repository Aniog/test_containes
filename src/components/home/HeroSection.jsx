import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-dark/70 via-brand-dark/40 to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="text-sm font-sans font-medium tracking-widest uppercase text-brand-gold mb-4">
            温馨家居 · 品质生活
          </p>
          <h1
            id="hero-title"
            className="font-serif font-bold text-4xl md:text-6xl text-white leading-tight mb-6"
          >
            让每一个角落<br />都充满家的温度
          </h1>
          <p
            id="hero-subtitle"
            className="font-sans text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-xl"
          >
            梅露可家居，精心甄选来自世界各地的优质家居用品，
            用细腻的设计与温暖的材质，为您的家注入生活的美好。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="bg-brand-gold text-brand-dark px-8 py-3.5 rounded-full font-sans font-semibold text-base hover:bg-yellow-400 transition-colors text-center"
            >
              探索产品系列
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full font-sans font-medium text-base hover:bg-white hover:text-brand-dark transition-colors text-center"
            >
              了解品牌故事
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs font-sans tracking-widest">向下滚动</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
