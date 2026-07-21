import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
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
        data-strk-bg-id="hero-bg-sail-7a3f2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-seafoam font-medium tracking-[0.3em] text-sm md:text-base uppercase mb-6"
        >
          乘风破浪 · 自由远航
        </p>
        <h1
          id="hero-title"
          className="font-serif font-bold text-white text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          帆船运动
          <br />
          <span className="text-seafoam">专题网站</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          探索帆船运动的魅力，感受海风与浪涛的呼唤。
          从入门技巧到顶级赛事，带你走进帆船的世界。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="bg-seafoam text-navy font-semibold px-8 py-4 rounded-full hover:bg-sky hover:text-white transition-colors duration-300 text-base"
          >
            了解更多
          </a>
          <a
            href="#events"
            onClick={(e) => { e.preventDefault(); document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-navy transition-colors duration-300 text-base"
          >
            查看赛事
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-seafoam transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
