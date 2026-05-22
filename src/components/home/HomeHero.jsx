import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 md:px-8 pt-20">
        <span className="inline-block bg-[#00d4c8]/10 text-[#00d4c8] text-xs font-medium px-4 py-1.5 rounded-full border border-[#00d4c8]/20 mb-6 uppercase tracking-widest">
          探索微观宇宙
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
        >
          肉眼看不见的<br />
          <span className="text-[#00d4c8]">奇妙世界</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          在显微镜下，每一滴水、每一粒土壤都隐藏着令人叹为观止的生命奇迹。
          欢迎来到 MicroCosmos，一个关于微观生命的视觉探索之旅。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-[#00d4c8] text-[#050d1a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#00b8ad] transition-colors text-base"
          >
            开始探索 <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#featured"
            className="inline-flex items-center gap-2 border border-[#00d4c8] text-[#00d4c8] font-semibold px-8 py-3.5 rounded-full hover:bg-[#00d4c8]/10 transition-colors text-base"
          >
            了解更多
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default HomeHero;
