import { Link } from 'react-router-dom';
import { ChevronRight, Target, Zap } from 'lucide-react';
import { topScorers } from '../../data/worldcup';

const HomeTopScorers = () => (
  <section className="py-16 md:py-24 bg-[#111827]">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-[#f5c518]" />
            <span className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest">射手榜</span>
          </div>
          <h2 className="text-3xl font-bold text-white">最佳射手</h2>
        </div>
        <Link to="/groups" className="flex items-center gap-1 text-[#f5c518] text-sm hover:text-yellow-400 transition-colors">
          查看更多 <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {topScorers.map((player) => (
          <div
            key={player.rank}
            className="flex items-center gap-4 bg-[#1a2235] border border-[#2a3550] rounded-2xl p-4 card-hover"
          >
            {/* Rank */}
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 ${
              player.rank === 1 ? 'bg-[#f5c518] text-[#0a0e1a]' :
              player.rank === 2 ? 'bg-slate-400 text-[#0a0e1a]' :
              player.rank === 3 ? 'bg-amber-700 text-white' :
              'bg-[#2a3550] text-slate-400'
            }`}>
              {player.rank}
            </div>

            {/* Flag */}
            <div className="text-2xl flex-shrink-0">{player.flag}</div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold text-sm truncate">{player.name}</div>
              <div className="text-slate-500 text-xs">{player.country}</div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <Target className="w-3 h-3 text-[#f5c518]" />
                  <span className="text-[#f5c518] font-black text-lg">{player.goals}</span>
                </div>
                <div className="text-slate-600 text-xs">进球</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-400 font-bold text-sm">{player.assists}</span>
                </div>
                <div className="text-slate-600 text-xs">助攻</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTopScorers;
