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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628]/90" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-[#E87722]/20 border border-[#E87722]/40 text-[#F5A623] text-xs md:text-sm px-4 py-2 mb-8 tracking-widest uppercase">
          <span className="w-2 h-2 bg-[#E87722] rounded-full inline-block" />
          <span id="hero-badge" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>精密制造 · 智能驱动 · 品质卓越</span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: 'Noto Serif SC, serif' }}
        >
          威达机械智造
          <br />
          <span className="text-[#E87722]">有限公司</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed"
          style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
        >
          专注高端精密机械装备研发与制造，以智能化生产工艺为核心驱动力，
          为航空航天、汽车制造、能源装备等领域提供全生命周期解决方案。
        </p>
        <p className="text-sm md:text-base text-gray-400 mb-12" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
          成立于2003年 · 国家高新技术企业 · ISO 9001:2015认证
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-[#E87722] text-white px-10 py-4 font-semibold text-base hover:bg-[#F5A623] transition-colors duration-200 tracking-wide"
            style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
          >
            探索核心业务
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-10 py-4 font-semibold text-base hover:bg-white hover:text-[#0A1628] transition-colors duration-200 tracking-wide"
            style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
          >
            联系我们
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { value: '20+', label: '年行业经验' },
            { value: '500+', label: '服务客户' },
            { value: '1200+', label: '完成项目' },
            { value: '98%', label: '客户满意度' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#E87722] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="向下滚动"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
