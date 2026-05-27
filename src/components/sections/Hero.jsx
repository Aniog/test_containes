import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/70 to-[#0A1628]/90" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#2E9CDB 1px, transparent 1px), linear-gradient(90deg, #2E9CDB 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-[#1E5FA8]/30 border border-[#1E5FA8]/50 text-[#2E9CDB] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#2E9CDB] rounded-full animate-pulse" />
          精密制造 · 智能智造
        </div>

        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          罗科百道机械智造
        </h1>
        <div className="text-[#C8922A] text-lg md:text-xl font-semibold tracking-widest mb-6 uppercase">
          LUOKE BAIDAO MECHANICAL MANUFACTURING CO., LTD.
        </div>

        <p id="hero-subtitle" className="text-[#8A9BB0] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          深耕精密机械制造领域二十余年，以卓越工艺与严苛品控为核心，
          为航空航天、汽车、能源及高端装备行业提供全链路定制化制造解决方案。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-[#1E5FA8] hover:bg-[#2E9CDB] text-white font-semibold px-10 py-4 rounded-lg transition-colors duration-200 text-base"
          >
            探索产品中心
          </a>
          <a
            href="#contact"
            className="border-2 border-white/40 hover:border-white text-white hover:bg-white hover:text-[#0A1628] font-semibold px-10 py-4 rounded-lg transition-all duration-200 text-base"
          >
            联系我们
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { value: '20+', label: '年行业经验' },
            { value: '500+', label: '服务客户' },
            { value: '98.6%', label: '产品合格率' },
            { value: '60+', label: '国家与地区出口' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[#8A9BB0] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
