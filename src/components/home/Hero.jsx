import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { tournament } from '@/data/worldcup';
import { Calendar, MapPin, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Users, label: '参赛球队', value: '48' },
  { icon: Globe, label: '主办国', value: '3' },
  { icon: MapPin, label: '比赛场馆', value: '16' },
  { icon: Calendar, label: '比赛天数', value: '39' },
];

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-wc-bg via-wc-bg/80 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-wc-bg via-transparent to-wc-bg/60" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wc-gold to-transparent z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-wc-gold">
              FIFA 官方
            </span>
            <span className="w-8 h-px bg-wc-gold" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
              {tournament.edition} 届世界杯
            </span>
          </div>

          {/* Title */}
          <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-2">
            FIFA
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-wc-gold leading-none mb-2">
            世界杯
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6">
            2026™
          </h1>

          {/* Subtitle */}
          <p id="hero-subtitle" className="text-gray-300 text-lg mb-4 leading-relaxed">
            足球盛宴，史上最大规模世界杯。48支球队，16座城市，3个国家共同举办。
          </p>

          {/* Host countries */}
          <div className="flex items-center gap-3 mb-8">
            {['🇺🇸 美国', '🇨🇦 加拿大', '🇲🇽 墨西哥'].map((host) => (
              <span key={host} className="text-sm text-gray-300 bg-wc-card border border-wc-border px-3 py-1.5 rounded-full">
                {host}
              </span>
            ))}
          </div>

          {/* Dates */}
          <div className="flex items-center gap-2 mb-10">
            <Calendar className="w-4 h-4 text-wc-gold" />
            <span className="text-wc-gold font-bold">2026年6月11日</span>
            <span className="text-gray-500">—</span>
            <span className="text-wc-gold font-bold">2026年7月19日</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.querySelector('#matches')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-wc-gold text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors duration-200"
            >
              查看赛程
            </button>
            <button
              onClick={() => document.querySelector('#standings')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-wc-gold text-wc-gold font-bold px-6 py-3 rounded-xl hover:bg-wc-gold hover:text-black transition-colors duration-200"
            >
              积分榜
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-wc-card/80 border border-wc-border rounded-xl p-4 backdrop-blur-sm">
              <Icon className="w-5 h-5 text-wc-gold mb-2" />
              <div className="text-2xl font-black text-white">{value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
