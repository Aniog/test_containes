import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-800/50 to-amber-900/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <div className="inline-block bg-amber-700/80 text-amber-100 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mb-6 tracking-widest">
          ✦ 温暖每一个家 ✦
        </div>
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Noto Serif SC', serif", textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          让家成为<br />
          <span className="text-amber-300">最温暖的港湾</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          庆巷家居，专注于为每个家庭提供精心挑选的优质家居用品。
          从卧室到厨房，从客厅到浴室，我们用心呵护您的每一处生活空间。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-amber-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            探索产品系列
          </a>
          <a
            href="#about"
            className="border-2 border-white/70 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-base"
          >
            了解我们
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
          {[
            { num: '15+', label: '年品质积累' },
            { num: '50万+', label: '幸福家庭' },
            { num: '2000+', label: '精选商品' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-300" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                {stat.num}
              </div>
              <div className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors animate-bounce"
        aria-label="向下滚动"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
