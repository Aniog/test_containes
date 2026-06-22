import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { matches, stats } from '../../data/worldcup';
import { ArrowRight, Zap } from 'lucide-react';

const liveMatch = matches.find((m) => m.status === 'LIVE');
const upcomingMatches = matches.filter((m) => m.status === 'UPCOMING').slice(0, 2);

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-950/90 via-transparent to-gray-950/50" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-3.5 h-3.5 text-red-400" />
            <span className="text-red-400 text-xs font-semibold tracking-wider uppercase">2026 FIFA 世界杯™</span>
          </div>

          <h1 id="hero-title" className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4">
            <span className="text-white">足球</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              改变世界
            </span>
          </h1>

          <p id="hero-subtitle" className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            2026年FIFA世界杯，美国、加拿大、墨西哥三国联合举办。48支球队，104场比赛，一个冠军。
          </p>

          {/* Host countries */}
          <div className="flex items-center gap-4 mb-10">
            {[
              { flag: '🇺🇸', name: '美国', cities: '11城市' },
              { flag: '🇨🇦', name: '加拿大', cities: '2城市' },
              { flag: '🇲🇽', name: '墨西哥', cities: '3城市' },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2 bg-gray-900/60 border border-gray-700 rounded-xl px-3 py-2">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <div className="text-white text-sm font-semibold">{c.name}</div>
                  <div className="text-gray-500 text-xs">{c.cities}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/matches"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              查看赛程 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/standings"
              className="flex items-center gap-2 border border-gray-600 hover:border-yellow-500 hover:text-yellow-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              积分榜
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { label: '参赛球队', value: stats.totalTeams, suffix: '支' },
            { label: '比赛场次', value: stats.totalMatches, suffix: '场' },
            { label: '举办城市', value: stats.hostCities, suffix: '座' },
            { label: '举办国家', value: stats.hostCountries, suffix: '国' },
            { label: '总进球数', value: stats.totalGoals, suffix: '球' },
            { label: '场均进球', value: stats.avgGoalsPerMatch, suffix: '球' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-black text-white">
                {s.value}<span className="text-yellow-400 text-lg">{s.suffix}</span>
              </div>
              <div className="text-gray-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Live match banner */}
        {liveMatch && (
          <div className="mt-6 bg-gray-900/80 border border-red-600/50 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-red-600 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-white text-xs font-bold">直播中</span>
              </div>
              <span className="text-gray-400 text-sm">{liveMatch.minute}'</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{liveMatch.homeTeam.flag}</span>
                <span className="text-white font-semibold">{liveMatch.homeTeam.name}</span>
              </div>
              <div className="text-2xl font-black text-yellow-400">
                {liveMatch.homeScore} - {liveMatch.awayScore}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">{liveMatch.awayTeam.name}</span>
                <span className="text-2xl">{liveMatch.awayTeam.flag}</span>
              </div>
            </div>
            <Link to="/matches" className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1">
              观看详情 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
