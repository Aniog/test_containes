import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D2137]/80 via-[#0D2137]/70 to-[#0D2137]/85" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <div className="inline-block bg-[#D4820A]/20 border border-[#D4820A]/50 text-[#D4820A] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          精密制造 · 智能驱动
        </div>
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
        >
          溪流谷机械智造
          <br />
          <span className="text-[#D4820A]">有限公司</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          专注高精度机械零部件研发与制造，以先进数控加工技术与严苛质量管控体系，
          为航空航天、汽车、能源及工业装备领域提供可靠的精密制造解决方案。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#D4820A] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#B8700A] transition text-base"
          >
            探索产品中心
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-3.5 rounded font-semibold hover:bg-white hover:text-[#0D2137] transition text-base"
          >
            联系我们
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/20 pt-10">
          {[
            { value: '20+', label: '年制造经验' },
            { value: '500+', label: '合作客户' },
            { value: '0.001mm', label: '加工精度' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4820A]">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce transition"
        aria-label="向下滚动"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
