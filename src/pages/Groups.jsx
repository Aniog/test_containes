import { useState } from 'react';
import { groups } from '@/data/worldcup';
import { Trophy, TrendingUp } from 'lucide-react';

const GroupTable = ({ group }) => (
  <div className="bg-[#1C2E45] border border-[#2D4A6B] rounded-xl overflow-hidden hover:border-amber-400/30 transition-colors">
    <div className="bg-[#243B55] px-5 py-3 flex items-center gap-2">
      <Trophy className="w-4 h-4 text-amber-400" />
      <h3 className="text-white font-black text-lg uppercase tracking-widest">
        小组 {group.id}
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#2D4A6B]">
            <th className="text-left text-slate-400 text-xs uppercase tracking-wider px-4 py-2">球队</th>
            <th className="text-center text-slate-400 text-xs uppercase tracking-wider px-2 py-2">场</th>
            <th className="text-center text-slate-400 text-xs uppercase tracking-wider px-2 py-2">胜</th>
            <th className="text-center text-slate-400 text-xs uppercase tracking-wider px-2 py-2">平</th>
            <th className="text-center text-slate-400 text-xs uppercase tracking-wider px-2 py-2">负</th>
            <th className="text-center text-slate-400 text-xs uppercase tracking-wider px-2 py-2">进</th>
            <th className="text-center text-slate-400 text-xs uppercase tracking-wider px-2 py-2">失</th>
            <th className="text-center text-slate-400 text-xs uppercase tracking-wider px-2 py-2">净</th>
            <th className="text-center text-slate-400 text-xs uppercase tracking-wider px-3 py-2">积分</th>
          </tr>
        </thead>
        <tbody>
          {group.teams
            .slice()
            .sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga))
            .map((team, idx) => (
              <tr
                key={team.code}
                className={`border-b border-[#2D4A6B]/50 hover:bg-[#243B55] transition-colors ${
                  idx < 2 ? 'border-l-2 border-l-amber-400' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                      idx < 2 ? 'bg-amber-400 text-[#0D1B2A]' : 'bg-[#2D4A6B] text-slate-400'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-lg">{team.flag}</span>
                    <span className="text-white font-semibold">{team.name}</span>
                  </div>
                </td>
                <td className="text-center text-slate-300 px-2 py-3">{team.played}</td>
                <td className="text-center text-green-400 font-semibold px-2 py-3">{team.won}</td>
                <td className="text-center text-slate-300 px-2 py-3">{team.drawn}</td>
                <td className="text-center text-red-400 font-semibold px-2 py-3">{team.lost}</td>
                <td className="text-center text-slate-300 px-2 py-3">{team.gf}</td>
                <td className="text-center text-slate-300 px-2 py-3">{team.ga}</td>
                <td className="text-center text-slate-300 px-2 py-3">{team.gf - team.ga > 0 ? `+${team.gf - team.ga}` : team.gf - team.ga}</td>
                <td className="text-center px-3 py-3">
                  <span className="text-amber-400 font-black text-base">{team.pts}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    <div className="px-4 py-2 flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-amber-400" />
      <span className="text-slate-400 text-xs">晋级淘汰赛</span>
    </div>
  </div>
);

const Groups = () => {
  const [filter, setFilter] = useState('all');
  const letters = groups.map((g) => g.id);

  const displayed = filter === 'all' ? groups : groups.filter((g) => g.id === filter);

  return (
    <div className="bg-[#0D1B2A] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-7 h-7 text-amber-400" />
            <h1 className="text-4xl font-black text-white uppercase tracking-wide">小组赛积分榜</h1>
          </div>
          <p className="text-slate-400">每组前两名晋级淘汰赛阶段</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
              filter === 'all' ? 'bg-amber-400 text-[#0D1B2A]' : 'bg-[#1C2E45] text-slate-300 hover:bg-[#243B55]'
            }`}
          >
            全部小组
          </button>
          {letters.map((l) => (
            <button
              key={l}
              onClick={() => setFilter(l)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                filter === l ? 'bg-amber-400 text-[#0D1B2A]' : 'bg-[#1C2E45] text-slate-300 hover:bg-[#243B55]'
              }`}
            >
              小组 {l}
            </button>
          ))}
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayed.map((group) => (
            <GroupTable key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
