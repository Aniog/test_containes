import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark Overlay with warm tint */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1C1C1E]/70 via-[#1C1C1E]/60 to-[#1C1C1E]/80" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-[#8B1A1A] via-[#C9A84C] to-[#8B1A1A]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative Chinese character */}
        <div className="font-calligraphy text-[#C9A84C]/30 text-[120px] md:text-[180px] leading-none absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none">
          遗
        </div>

        <div className="relative">
          <p className="text-[#C9A84C] text-sm md:text-base tracking-[0.4em] mb-4 font-light animate-fade-in-up">
            中国非物质文化遗产
          </p>

          <h1
            id="hero-title"
            className="font-serif-cn text-[#F8F3EA] text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            守护非遗
            <br />
            <span className="text-[#C9A84C]">传承文明</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-[#F8F3EA]/75 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            中国非物质文化遗产是中华民族智慧与文明的结晶，
            <br className="hidden md:block" />
            承载着千年历史，连接着过去与未来。
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <button
              onClick={() => document.querySelector('#items')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#8B1A1A] hover:bg-[#A52020] text-[#F8F3EA] px-8 py-3 rounded-full text-base font-medium transition-all duration-200 border-none cursor-pointer shadow-lg hover:shadow-xl"
            >
              探索非遗项目
            </button>
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 px-8 py-3 rounded-full text-base font-medium transition-all duration-200 bg-transparent cursor-pointer"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors animate-float bg-transparent border-none cursor-pointer"
        aria-label="向下滚动"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
