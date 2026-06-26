import { Link } from 'react-router-dom';
import { ChevronRight, Shield } from 'lucide-react';
import { featuredTeams } from '../../data/worldcup';

const HomeFeaturedTeams = () => (
  <section className="py-16 md:py-24 bg-[#0a0e1a]">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-[#f5c518]" />
            <span className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest">参赛球队</span>
          </div>
          <h2 className="text-3xl font-bold text-white">夺冠热门</h2>
        </div>
        <Link to="/teams" className="flex items-center gap-1 text-[#f5c518] text-sm hover:text-yellow-400 transition-colors">
          全部球队 <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredTeams.map((team) => (
          <div
            key={team.name}
            className="bg-[#1a2235] border border-[#2a3550] rounded-2xl p-5 card-hover relative overflow-hidden"
          >
            {/* Color accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ backgroundColor: team.color }}
            />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{team.flag}</span>
                <div>
                  <h3 className="text-white font-bold text-lg">{team.name}</h3>
                  <span className="text-slate-500 text-xs">小组 {team.group} · #{team.ranking}</span>
                </div>
              </div>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: `${team.color}20`, color: team.color }}
              >
                {team.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#0a0e1a] rounded-xl p-3">
                <div className="text-slate-500 text-xs mb-1">主教练</div>
                <div className="text-white text-xs font-medium truncate">{team.coach}</div>
              </div>
              <div className="bg-[#0a0e1a] rounded-xl p-3">
                <div className="text-slate-500 text-xs mb-1">世界杯冠军</div>
                <div className="text-[#f5c518] font-black text-lg">{team.titles}x</div>
              </div>
            </div>

            <div>
              <div className="text-slate-500 text-xs mb-2">关键球员</div>
              <div className="flex flex-wrap gap-1.5">
                {team.players.slice(0, 3).map((p) => (
                  <span key={p} className="text-xs text-slate-300 bg-[#2a3550] rounded-lg px-2 py-1">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFeaturedTeams;
