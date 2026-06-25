import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-baseball-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 rounded-full px-4 py-2 mb-6">
          <span className="text-red-400 text-sm font-bold tracking-widest uppercase">美国国家消遣</span>
        </div>

        <h1
          id="hero-title"
          className="font-black text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-4 uppercase"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          棒球的
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
            激情世界
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          探索棒球运动的历史、规则与传奇球星，感受这项跨越150年的伟大运动的无穷魅力。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg shadow-red-900/40 hover:shadow-red-900/60 hover:-translate-y-0.5"
          >
            开始探索
          </a>
          <a
            href="#players"
            className="bg-transparent border-2 border-slate-500 hover:border-white text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            传奇球星
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-slate-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
