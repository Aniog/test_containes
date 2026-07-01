import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play, ChevronRight } from 'lucide-react';

const stats = [
  { value: '32+', label: '顶级联赛' },
  { value: '500+', label: '球队资料' },
  { value: '10K+', label: '每日新闻' },
  { value: '直播', label: '实时比分' },
];

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-football-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/40 text-green-400 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            2025/26 赛季进行中
          </div>

          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">
            感受足球
            <span className="text-green-400 block">激情与荣耀</span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            实时比分、深度新闻、球队数据——一站式足球资讯平台，陪你见证每一个精彩瞬间。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#matches"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Play className="w-5 h-5" />
              查看直播赛事
            </a>
            <a
              href="#news"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-green-600 text-slate-300 hover:text-green-400 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              最新新闻
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-slate-700/60">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-green-400">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
