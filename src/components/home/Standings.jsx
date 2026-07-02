import { useState } from 'react';
import { groups } from '@/data/worldcup';
import { ChevronUp, ChevronDown, Minus } from 'lucide-react';

const GroupTable = ({ group }) => (
  <div className="bg-wc-card border border-wc-border rounded-xl overflow-hidden">
    <div className="bg-wc-surface px-4 py-3 flex items-center gap-2 border-b border-wc-border">
      <span className="w-7 h-7 bg-wc-gold text-black text-sm font-black rounded flex items-center justify-center">
        {group.id}
      </span>
      <span className="text-white font-bold text-sm">第 {group.id} 组</span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 text-xs border-b border-wc-border">
            <th className="text-left px-4 py-2 font-medium">球队</th>
            <th className="px-2 py-2 font-medium text-center">赛</th>
            <th className="px-2 py-2 font-medium text-center">胜</th>
            <th className="px-2 py-2 font-medium text-center">平</th>
            <th className="px-2 py-2 font-medium text-center">负</th>
            <th className="px-2 py-2 font-medium text-center">净</th>
            <th className="px-2 py-2 font-medium text-center text-wc-gold">积分</th>
          </tr>
        </thead>
        <tbody>
          {group.teams.map((team, idx) => {
            const gd = team.gf - team.ga;
            const isQualified = idx < 2;
            return (
              <tr
                key={team.name}
                className={`border-b border-wc-border/50 last:border-0 hover:bg-wc-surface/50 transition-colors ${
                  isQualified ? 'border-l-2 border-l-wc-gold' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs w-4">{idx + 1}</span>
                    <span className="text-lg">{team.flag}</span>
                    <span className="text-white font-medium">{team.name}</span>
                    {isQualified && (
                      <span className="text-xs text-wc-gold bg-wc-gold/10 px-1.5 py-0.5 rounded hidden sm:inline">
                        晋级
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-2 py-3 text-center text-gray-400">{team.played}</td>
                <td className="px-2 py-3 text-center text-gray-400">{team.won}</td>
                <td className="px-2 py-3 text-center text-gray-400">{team.drawn}</td>
                <td className="px-2 py-3 text-center text-gray-400">{team.lost}</td>
                <td className="px-2 py-3 text-center">
                  <span className={`font-medium ${gd > 0 ? 'text-green-400' : gd < 0 ? 'text-wc-red' : 'text-gray-400'}`}>
                    {gd > 0 ? `+${gd}` : gd}
                  </span>
                </td>
                <td className="px-2 py-3 text-center">
                  <span className="text-wc-gold font-black text-base">{team.pts}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

const Standings = () => {
  return (
    <section id="standings" className="py-20 bg-wc-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-wc-gold mb-2">小组赛</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">积分榜</h2>
          <p className="text-gray-400 mt-2 text-sm">每组前两名晋级淘汰赛阶段</p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {groups.map((group) => (
            <GroupTable key={group.id} group={group} />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 border-l-2 border-wc-gold bg-transparent" />
            <span>晋级淘汰赛</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standings;
