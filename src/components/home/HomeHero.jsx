import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Users, MapPin } from 'lucide-react';
import { tournament } from '../../data/worldcup';

const stats = [
  { label: '参赛球队', value: tournament.teams, icon: Users },
  { label: '比赛场次', value: tournament.matches, icon: Zap },
  { label: '举办城市', value: tournament.stadiums, icon: MapPin },
];

const HomeHero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f5c518]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f5c518]/3 rounded-full blur-3xl" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#2a3550 1px, transparent 1px), linear-gradient(90deg, #2a3550 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center py-32">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#f5c518]/10 border border-[#f5c518]/30 rounded-full px-4 py-1.5 mb-8">
        <span className="w-2 h-2 rounded-full bg-[#f5c518] animate-pulse" />
        <span className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest">
          {tournament.currentPhase} · 进行中
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none">
        <span className="text-white">FIFA</span>
        <br />
        <span className="gold-gradient-text">WORLD CUP</span>
        <br />
        <span className="text-white">2026™</span>
      </h1>

      {/* Hosts */}
      <div className="flex items-center justify-center gap-3 mt-6 mb-10 flex-wrap">
        {tournament.hosts.map((host) => (
          <span
            key={host}
            className="text-slate-300 text-base md:text-lg font-medium bg-[#1a2235] border border-[#2a3550] rounded-full px-4 py-1.5"
          >
            {host}
          </span>
        ))}
      </div>

      {/* Dates */}
      <p className="text-slate-400 text-lg mb-10">
        {tournament.startDate} — {tournament.finalDate}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <Link
          to="/matches"
          className="flex items-center gap-2 bg-[#f5c518] text-[#0a0e1a] font-bold rounded-xl px-8 py-3.5 hover:bg-yellow-400 transition-colors text-sm"
        >
          查看赛程
          <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          to="/groups"
          className="flex items-center gap-2 border border-[#2a3550] text-slate-300 rounded-xl px-8 py-3.5 hover:border-[#f5c518]/50 hover:text-white transition-colors text-sm"
        >
          积分榜
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-[#1a2235]/80 border border-[#2a3550] rounded-2xl p-4 text-center">
            <Icon className="w-5 h-5 text-[#f5c518] mx-auto mb-2" />
            <div className="text-2xl font-black text-white">{value}</div>
            <div className="text-slate-500 text-xs mt-0.5">{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
      <span className="text-xs">向下滚动</span>
      <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
    </div>
  </section>
);

export default HomeHero;
