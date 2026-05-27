import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2C1810]/70 via-[#2C1810]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#C4A882]" />
            <span>2026 年度家居品质之选</span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            让每一个家，
            <br />
            都充满温暖与爱
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-lg"
          >
            由妮可家居，精选全球优质家居用品，用心为您打造舒适、温馨、充满生活气息的美好居所。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-[#8B6F47] text-white rounded-full px-8 py-3.5 font-medium hover:bg-[#6B5035] transition-colors text-base"
            >
              探索产品系列
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border-2 border-white/70 text-white rounded-full px-8 py-3.5 font-medium hover:bg-white/10 transition-colors text-base"
            >
              了解我们的故事
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { num: '10,000+', label: '幸福家庭' },
              { num: '500+', label: '精选产品' },
              { num: '8年', label: '品质坚守' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {stat.num}
                </div>
                <div className="text-sm text-white/70 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors"
      >
        <span className="text-xs">向下滚动</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
