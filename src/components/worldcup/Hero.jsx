import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = () => {
    document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0e1a]/70 via-[#0a0e1a]/50 to-[#0a0e1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#f5c518]/10 border border-[#f5c518]/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#f5c518] animate-pulse" />
          <span className="text-[#f5c518] text-sm font-semibold tracking-wide">2026 FIFA 世界杯</span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-none"
        >
          足球的
          <span className="block bg-gradient-to-r from-[#f5c518] via-[#ffd700] to-[#f5c518] bg-clip-text text-transparent">
            最高荣耀
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          2026年FIFA世界杯将在美国、加拿大和墨西哥三国联合举办，48支球队争夺足球世界最高荣誉
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f5c518] text-[#0a0e1a] font-bold px-8 py-3 rounded-full hover:bg-[#ffd700] transition-all duration-200 hover:scale-105 shadow-lg shadow-[#f5c518]/20"
          >
            查看赛程
          </button>
          <button
            onClick={() => document.querySelector('#teams')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/30 text-white font-bold px-8 py-3 rounded-full hover:border-[#f5c518] hover:text-[#f5c518] transition-all duration-200"
          >
            参赛球队
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '48', label: '参赛球队' },
            { value: '104', label: '场比赛' },
            { value: '16', label: '举办城市' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#f5c518]">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-400 hover:text-[#f5c518] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
