import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tournament } from '@/data/worldcup';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/85 to-[#0a0e1a]/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#f5a623]/5 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#3b82f6]/5 rounded-full blur-3xl z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/30 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-4 h-4 text-[#f5a623]" />
            <span className="text-[#f5a623] text-sm font-bold tracking-wide">FIFA WORLD CUP 2026</span>
          </div>

          {/* Title */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
          >
            世界杯
            <span className="block bg-gradient-to-r from-[#f5a623] to-[#ffd700] bg-clip-text text-transparent">
              2026
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            美国 · 加拿大 · 墨西哥联合举办<br />
            <span className="text-[#f5a623] font-semibold">48支球队 · 104场比赛 · 一个冠军</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/matches"
              className="bg-[#f5a623] text-black font-bold px-8 py-3.5 rounded-lg hover:bg-[#e09415] transition-colors duration-200 text-base"
            >
              查看赛程
            </Link>
            <Link
              to="/groups"
              className="border border-[#f5a623] text-[#f5a623] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#f5a623]/10 transition-colors duration-200 text-base"
            >
              小组积分
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, value: `${tournament.totalTeams}`, label: '参赛球队' },
              { icon: Calendar, value: `${tournament.totalMatches}`, label: '场比赛' },
              { icon: MapPin, value: `${tournament.stadiums}`, label: '座球场' },
              { icon: Trophy, value: '3', label: '举办国' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
              >
                <stat.icon className="w-5 h-5 text-[#f5a623] mx-auto mb-1" />
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
