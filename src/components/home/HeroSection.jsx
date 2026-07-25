import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play, ChevronRight } from 'lucide-react';

const stats = [
  { value: '48', label: '场小组赛' },
  { value: '32', label: '参赛国家' },
  { value: '8', label: '小组数量' },
  { value: '2026', label: '举办年份' },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-worldcup-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

      {/* Gold shimmer top border */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            小组赛进行中
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-4"
          >
            FIFA<br />
            <span className="text-yellow-500">世界杯</span> 2026
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            全程追踪世界杯赛事，实时比分、小组积分榜、射手榜，以及来自全球32支球队的最新资讯。
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#matches"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <Play className="w-4 h-4 fill-gray-950" />
              查看实时比分
            </a>
            <a
              href="#standings"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg border border-gray-700 transition-colors text-sm"
            >
              小组积分榜
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-yellow-400">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
