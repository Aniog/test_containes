import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { tournament, stats, matches, topScorers } from '@/data/worldcup';
import { Trophy, Calendar, MapPin, Star, ChevronRight, Flame } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0D1B2A]/80 via-[#0D1B2A]/60 to-[#0D1B2A]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-full px-4 py-2 mb-6">
          <Flame className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">进行中</span>
        </div>

        <h1 id="hero-title" className="text-5xl md:text-8xl font-black text-white uppercase leading-none mb-4">
          FIFA<br />
          <span className="text-amber-400">世界杯</span>
        </h1>
        <p id="hero-subtitle" className="text-2xl md:text-4xl font-black text-slate-300 mb-2">2026</p>
        <p className="text-slate-400 text-lg mb-8">
          美国 · 加拿大 · 墨西哥 | 2026年6月11日 — 7月19日
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/schedule"
            className="bg-amber-400 text-[#0D1B2A] font-bold rounded-xl px-8 py-4 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            查看赛程
          </Link>
          <Link
            to="/groups"
            className="border border-amber-400 text-amber-400 font-bold rounded-xl px-8 py-4 hover:bg-amber-400/10 transition-colors flex items-center justify-center gap-2"
          >
            <Trophy className="w-5 h-5" />
            小组积分
          </Link>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => (
  <section className="bg-[#1C2E45] border-y border-[#2D4A6B]">
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-3xl mb-1">{s.icon}</div>
          <div className="text-3xl font-black text-amber-400">{s.value}</div>
          <div className="text-slate-400 text-sm mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const MatchCard = ({ match }) => {
  const isFinished = match.status === 'finished';
  return (
    <div className="bg-[#1C2E45] border border-[#2D4A6B] rounded-xl p-4 hover:border-amber-400/40 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
          {match.group ? `小组 ${match.group}` : '淘汰赛'}
        </span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
          isFinished ? 'bg-green-900/50 text-green-400' : 'bg-amber-400/20 text-amber-400'
        }`}>
          {isFinished ? '已结束' : '即将开始'}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-right">
          <div className="text-2xl mb-1">{match.home.flag}</div>
          <div className="text-white font-bold text-sm">{match.home.name}</div>
        </div>

        <div className="text-center px-3">
          {isFinished ? (
            <div className="text-2xl font-black text-white">
              {match.homeScore} <span className="text-slate-500">-</span> {match.awayScore}
            </div>
          ) : (
            <div className="text-slate-400 font-bold text-sm">
              <div>{match.date}</div>
              <div className="text-amber-400">{match.time}</div>
            </div>
          )}
        </div>

        <div className="flex-1 text-left">
          <div className="text-2xl mb-1">{match.away.flag}</div>
          <div className="text-white font-bold text-sm">{match.away.name}</div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1 text-slate-500 text-xs">
        <MapPin className="w-3 h-3" />
        <span>{match.city}</span>
      </div>
    </div>
  );
};

const RecentMatches = () => {
  const recent = matches.filter((m) => m.status === 'finished').slice(-3);
  const upcoming = matches.filter((m) => m.status === 'upcoming').slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-wide">最近比赛</h2>
            <Link to="/schedule" className="text-amber-400 text-sm font-semibold flex items-center gap-1 hover:text-amber-300">
              全部 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {recent.map((m) => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-wide">即将开赛</h2>
            <Link to="/schedule" className="text-amber-400 text-sm font-semibold flex items-center gap-1 hover:text-amber-300">
              全部 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {upcoming.map((m) => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

const TopScorers = () => (
  <section className="bg-[#1C2E45] border-y border-[#2D4A6B]">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-wide flex items-center gap-2">
          <Star className="w-6 h-6 text-amber-400" />
          射手榜
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#2D4A6B]">
              <th className="text-left text-slate-400 text-xs uppercase tracking-wider pb-3 pr-4">排名</th>
              <th className="text-left text-slate-400 text-xs uppercase tracking-wider pb-3">球员</th>
              <th className="text-left text-slate-400 text-xs uppercase tracking-wider pb-3">国家</th>
              <th className="text-center text-slate-400 text-xs uppercase tracking-wider pb-3">进球</th>
              <th className="text-center text-slate-400 text-xs uppercase tracking-wider pb-3">助攻</th>
            </tr>
          </thead>
          <tbody>
            {topScorers.map((p) => (
              <tr key={p.rank} className="border-b border-[#2D4A6B]/50 hover:bg-[#243B55] transition-colors">
                <td className="py-4 pr-4">
                  <span className={`font-black text-lg ${p.rank === 1 ? 'text-amber-400' : 'text-slate-400'}`}>
                    {p.rank === 1 ? '🥇' : p.rank === 2 ? '🥈' : p.rank === 3 ? '🥉' : p.rank}
                  </span>
                </td>
                <td className="py-4">
                  <span className="text-white font-bold">{p.name}</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-300">{p.flag} {p.country}</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-amber-400 font-black text-lg">{p.goals}</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-slate-300 font-semibold">{p.assists}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const HostCities = () => {
  const containerRef = useRef(null);
  const cities = [
    { id: 'dallas', name: '达拉斯', country: '美国', stadium: 'AT&T 体育场', capacity: '92,100', titleId: 'city-dallas-title', descId: 'city-dallas-desc', imgId: 'city-dallas-img-d4e5f6' },
    { id: 'nyc', name: '纽约', country: '美国', stadium: '大都会体育场', capacity: '82,500', titleId: 'city-nyc-title', descId: 'city-nyc-desc', imgId: 'city-nyc-img-g7h8i9' },
    { id: 'la', name: '洛杉矶', country: '美国', stadium: 'SoFi 体育场', capacity: '70,240', titleId: 'city-la-title', descId: 'city-la-desc', imgId: 'city-la-img-j1k2l3' },
    { id: 'miami', name: '迈阿密', country: '美国', stadium: '硬石体育场', capacity: '65,326', titleId: 'city-miami-title', descId: 'city-miami-desc', imgId: 'city-miami-img-m4n5o6' },
    { id: 'toronto', name: '多伦多', country: '加拿大', stadium: 'BMO 球场', capacity: '45,000', titleId: 'city-toronto-title', descId: 'city-toronto-desc', imgId: 'city-toronto-img-p7q8r9' },
    { id: 'mexico', name: '墨西哥城', country: '墨西哥', stadium: '阿兹特克球场', capacity: '87,523', titleId: 'city-mexico-title', descId: 'city-mexico-desc', imgId: 'city-mexico-img-s1t2u3' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16" ref={containerRef}>
      <h2 className="text-2xl font-black text-white uppercase tracking-wide mb-8 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-amber-400" />
        举办城市
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <div key={city.id} className="bg-[#1C2E45] border border-[#2D4A6B] rounded-xl overflow-hidden hover:border-amber-400/40 transition-colors group">
            <div className="relative h-40 overflow-hidden">
              <img
                alt={city.name}
                data-strk-img-id={city.imgId}
                data-strk-img={`[${city.descId}] [${city.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E45] to-transparent" />
            </div>
            <div className="p-4">
              <h3 id={city.titleId} className="text-white font-black text-lg">{city.name}</h3>
              <p id={city.descId} className="text-slate-400 text-sm">{city.country} · {city.stadium}</p>
              <p className="text-amber-400 text-sm font-semibold mt-1">容量: {city.capacity}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => (
  <div className="bg-[#0D1B2A] min-h-screen">
    <HeroSection />
    <StatsBar />
    <RecentMatches />
    <TopScorers />
    <HostCities />
  </div>
);

export default Home;
