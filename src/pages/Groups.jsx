import { useState } from 'react';
import { BarChart2, ChevronUp, Minus, ChevronDown } from 'lucide-react';
import { groups } from '../data/worldcup';

const getDiff = (team) => team.gf - team.ga;

const RankIndicator = ({ rank }) => {
  if (rank <= 2) return <div className="w-1 h-8 rounded-full bg-green-500" title="晋级" />;
  return <div className="w-1 h-8 rounded-full bg-[#2a3550]" />;
};

const GroupTable = ({ group }) => {
  const sorted = [...group.teams].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const diffA = getDiff(a);
    const diffB = getDiff(b);
    if (diffB !== diffA) return diffB - diffA;
    return b.gf - a.gf;
  });

  return (
    <div className="bg-[#1a2235] border border-[#2a3550] rounded-2xl overflow-hidden">
      {/* Group header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#2a3550]">
        <div className="w-8 h-8 rounded-xl bg-[#f5c518] flex items-center justify-center">
          <span className="text-[#0a0e1a] font-black text-sm">{group.id}</span>
        </div>
        <span className="text-white font-bold">第 {group.id} 组</span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[auto_1fr_repeat(6,_auto)] gap-x-3 px-5 py-2.5 border-b border-[#2a3550]">
        <div className="w-1" />
        <div className="text-slate-500 text-xs font-semibold">球队</div>
        <div className="text-slate-500 text-xs font-semibold text-center w-7">赛</div>
        <div className="text-slate-500 text-xs font-semibold text-center w-7">胜</div>
        <div className="text-slate-500 text-xs font-semibold text-center w-7">平</div>
        <div className="text-slate-500 text-xs font-semibold text-center w-7">负</div>
        <div className="text-slate-500 text-xs font-semibold text-center w-10">净胜</div>
        <div className="text-[#f5c518] text-xs font-semibold text-center w-8">积分</div>
      </div>

      {/* Rows */}
      {sorted.map((team, idx) => (
        <div
          key={team.name}
          className={`grid grid-cols-[auto_1fr_repeat(6,_auto)] gap-x-3 px-5 py-3 items-center ${
            idx < sorted.length - 1 ? 'border-b border-[#2a3550]/50' : ''
          } ${idx < 2 ? 'bg-green-500/5' : ''}`}
        >
          <RankIndicator rank={idx + 1} />
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-slate-500 text-xs w-4 text-center">{idx + 1}</span>
            <span className="text-xl">{team.flag}</span>
            <span className="text-white text-sm font-medium truncate">{team.name}</span>
          </div>
          <div className="text-slate-400 text-sm text-center w-7">{team.played}</div>
          <div className="text-slate-400 text-sm text-center w-7">{team.won}</div>
          <div className="text-slate-400 text-sm text-center w-7">{team.drawn}</div>
          <div className="text-slate-400 text-sm text-center w-7">{team.lost}</div>
          <div className={`text-sm text-center w-10 font-medium ${getDiff(team) > 0 ? 'text-green-400' : getDiff(team) < 0 ? 'text-red-400' : 'text-slate-400'}`}>
            {getDiff(team) > 0 ? '+' : ''}{getDiff(team)}
          </div>
          <div className="text-[#f5c518] font-black text-sm text-center w-8">{team.pts}</div>
        </div>
      ))}

      {/* Legend */}
      <div className="px-5 py-3 border-t border-[#2a3550] flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-slate-600 text-xs">前2名晋级淘汰赛</span>
      </div>
    </div>
  );
};

const Groups = () => {
  const [view, setView] = useState('grid');

  return (
    <div className="min-h-screen bg-[#0a0e1a] pt-16">
      {/* Header */}
      <div className="bg-[#111827] border-b border-[#2a3550]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 className="w-5 h-5 text-[#f5c518]" />
            <span className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest">小组赛</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">积分榜</h1>
          <p className="text-slate-400 text-sm">8个小组 · 48支球队 · 小组前2名晋级</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: '参赛球队', value: 48, color: 'text-[#f5c518]' },
            { label: '小组数量', value: 8, color: 'text-blue-400' },
            { label: '晋级名额', value: 16, color: 'text-green-400' },
            { label: '已完成比赛', value: groups.reduce((acc, g) => acc + g.teams.reduce((s, t) => s + t.played, 0) / 2, 0), color: 'text-purple-400' },
          ].map((item) => (
            <div key={item.label} className="bg-[#1a2235] border border-[#2a3550] rounded-2xl p-4 text-center">
              <div className={`text-3xl font-black ${item.color}`}>{item.value}</div>
              <div className="text-slate-500 text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Groups grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {groups.map((group) => (
            <GroupTable key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
