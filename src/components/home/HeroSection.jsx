import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-noir-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,110,0.08)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 mb-8">
          <Sparkles size={13} className="text-[#c8a96e]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            创意设计工作室
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none mb-6"
          style={{ textShadow: '0 0 80px rgba(200,169,110,0.2)' }}
        >
          黑暗中的
          <br />
          <span className="text-[#c8a96e]">光芒</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          我们打造极致的数字体验，将创意与技术完美融合，
          为您的品牌注入无与伦比的视觉冲击力。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#services')}
            className="group flex items-center gap-2 bg-[#c8a96e] text-black font-semibold rounded-full px-8 py-4 hover:bg-[#d4b87a] transition-all duration-200 border-none cursor-pointer text-base"
          >
            探索服务
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#works')}
            className="flex items-center gap-2 border border-neutral-700 text-white rounded-full px-8 py-4 hover:border-neutral-400 transition-all duration-200 bg-transparent cursor-pointer text-base"
          >
            查看作品
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-neutral-900 pt-10">
          {[
            { value: '200+', label: '完成项目' },
            { value: '50+', label: '合作客户' },
            { value: '8年', label: '行业经验' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-neutral-600" />
      </div>
    </section>
  );
}
