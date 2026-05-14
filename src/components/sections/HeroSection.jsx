import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1A1A2E]/80 via-[#1A1A2E]/60 to-[#1A1A2E]/90" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8431A]/20 border border-[#E8431A]/40 text-[#F5A623] text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
          专业广告创意服务
        </div>

        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          创意无界<br />
          <span className="text-[#E8431A]">广告有道</span>
        </h1>

        <p id="hero-subtitle" className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          秋易广告，专注品牌策划、视觉设计与整合营销传播，
          用创意点燃品牌价值，让每一次传播都精准触达目标受众。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full bg-[#E8431A] text-white font-semibold text-base hover:bg-[#F5A623] transition-colors duration-200 shadow-lg shadow-[#E8431A]/30"
          >
            查看案例
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:border-[#F5A623] hover:text-[#F5A623] transition-colors duration-200"
          >
            免费咨询
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { num: '500+', label: '服务客户' },
            { num: '10年', label: '行业经验' },
            { num: '98%', label: '客户满意度' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#F5A623]">{stat.num}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
