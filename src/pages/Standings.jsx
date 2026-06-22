import { useState } from 'react';
import { groups, topScorers } from '../data/worldcup';

const GroupTable = ({ group }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
    <div className="bg-gray-800 px-5 py-3 flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center">
        <span className="text-white font-black text-sm">{group.id}</span>
      </div>
      <span className="text-white font-bold">小组 {group.id}</span>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left text-gray-500 text-xs uppercase tracking-wider px-5 py-3 font-medium">球队</th>
            <th className="text-center text-gray-500 text-xs uppercase tracking-wider px-3 py-3 font-medium">赛</th>
            <th className="text-center text-gray-500 text-xs uppercase tracking-wider px-3 py-3 font-medium">胜</th>
            <th className="text-center text-gray-500 text-xs uppercase tracking-wider px-3 py-3 font-medium">平</th>
            <th className="text-center text-gray-500 text-xs uppercase tracking-wider px-3 py-3 font-medium">负</th>
            <th className="text-center text-gray-500 text-xs uppercase tracking-wider px-3 py-3 font-medium">进</th>
            <th className="text-center text-gray-500 text-xs uppercase tracking-wider px-3 py-3 font-medium">失</th>
            <th className="text-center text-gray-500 text-xs uppercase tracking-wider px-3 py-3 font-medium">净</th>
            <th className="text-center text-gray-500 text-xs uppercase tracking-wider px-3 py-3 font-medium">积分</th>
          </tr>
        </thead>
        <tbody>
          {group.teams.map((team, idx) => (
            <tr
              key={team.code}
              className={`border-b border-gray-800/50 last:border-0 hover:bg-gray-800/50 transition-colors ${
                idx < 2 ? 'border-l-2 border-l-green-500' : ''
              }`}
            >
              <td className="px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{team.flag}</span>
                  <div>
                    <div className="text-white font-semibold">{team.name}</div>
                    <div className="text-gray-600 text-xs">{team.code}</div>
                  </div>
                  {idx < 2 && (
                    <span className="ml-1 text-xs text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded">晋级</span>
                  )}
                </div>
              </td>
              <td className="text-center text-gray-300 px-3 py-3">{team.played}</td>
              <td className="text-center text-green-400 px-3 py-3 font-medium">{team.won}</td>
              <td className="text-center text-yellow-400 px-3 py-3 font-medium">{team.drawn}</td>
              <td className="text-center text-red-400 px-3 py-3 font-medium">{team.lost}</td>
              <td className="text-center text-gray-300 px-3 py-3">{team.gf}</td>
              <td className="text-center text-gray-300 px-3 py-3">{team.ga}</td>
              <td className="text-center text-gray-300 px-3 py-3">{team.gf - team.ga > 0 ? `+${team.gf - team.ga}` : team.gf - team.ga}</td>
              <td className="text-center px-3 py-3">
                <span className="text-white font-black text-base">{team.pts}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Standings = () => {
  const [tab, setTab] = useState('groups');

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-2">积分榜</h1>
          <p className="text-gray-500">2026 FIFA 世界杯小组赛积分排名</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-800">
          {[
            { id: 'groups', label: '小组积分' },
            { id: 'scorers', label: '射手榜' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors -mb-px ${
                tab === t.id
                  ? 'border-red-500 text-red-400'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'groups' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {groups.map((group) => (
              <GroupTable key={group.id} group={group} />
            ))}
          </div>
        )}

        {tab === 'scorers' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 text-xs text-gray-500 uppercase tracking-wider px-6 py-3 border-b border-gray-800">
              <span className="col-span-1">#</span>
              <span className="col-span-4">球员</span>
              <span className="col-span-3">球队</span>
              <span className="col-span-2 text-center">进球</span>
              <span className="col-span-2 text-center">助攻</span>
            </div>
            {topScorers.map((scorer, idx) => (
              <div
                key={scorer.rank}
                className={`grid grid-cols-12 items-center px-6 py-4 hover:bg-gray-800/50 transition-colors ${
                  idx < topScorers.length - 1 ? 'border-b border-gray-800/50' : ''
                }`}
              >
                <div className="col-span-1">
                  {scorer.rank <= 3 ? (
                    <span className="text-xl">
                      {scorer.rank === 1 ? '🥇' : scorer.rank === 2 ? '🥈' : '🥉'}
                    </span>
                  ) : (
                    <span className="text-gray-600 font-semibold">{scorer.rank}</span>
                  )}
                </div>
                <div className="col-span-4 text-white font-semibold">{scorer.name}</div>
                <div className="col-span-3 flex items-center gap-2">
                  <span className="text-xl">{scorer.flag}</span>
                  <span className="text-gray-400 text-sm">{scorer.team}</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="text-yellow-400 font-black text-xl">{scorer.goals}</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="text-green-400 font-semibold">{scorer.assists}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Standings;
