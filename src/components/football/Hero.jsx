import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
          FIFA 世界杯
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-6"
        >
          足球的<span className="text-yellow-400">最高荣耀</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          世界杯是全球最受瞩目的体育盛事，每四年一届，汇聚世界顶级球队，书写无数传奇故事。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#history"
            className="bg-yellow-400 text-gray-950 font-bold rounded-full px-8 py-3 hover:bg-yellow-300 transition-colors text-base"
          >
            探索历史
          </a>
          <a
            href="#2026"
            className="border border-yellow-400 text-yellow-400 font-bold rounded-full px-8 py-3 hover:bg-yellow-400/10 transition-colors text-base"
          >
            2026 赛事
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#history"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-400 hover:text-yellow-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
