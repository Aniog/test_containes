import { useState } from 'react';
import { groups } from '../data/worldcup';

const allTeams = groups.flatMap((g) =>
  g.teams.map((t) => ({ ...t, groupId: g.id }))
);

const countryFilter = ['全部', '🇺🇸 美国', '🇨🇦 加拿大', '🇲🇽 墨西哥', '其他'];

const TeamCard = ({ team }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors">
    <div className="flex items-start justify-between mb-4">
      <span className="text-5xl">{team.flag}</span>
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">小组 {team.groupId}</span>
        <span className="text-xs text-gray-600">{team.code}</span>
      </div>
    </div>
    <h3 className="text-white font-bold text-xl mb-4">{team.name}</h3>

    <div className="grid grid-cols-4 gap-2 text-center">
      {[
        { label: '积分', value: team.pts, color: 'text-yellow-400' },
        { label: '胜', value: team.won, color: 'text-green-400' },
        { label: '平', value: team.drawn, color: 'text-blue-400' },
        { label: '负', value: team.lost, color: 'text-red-400' },
      ].map((stat) => (
        <div key={stat.label} className="bg-gray-950 rounded-lg py-2">
          <div className={`font-black text-lg ${stat.color}`}>{stat.value}</div>
          <div className="text-gray-600 text-xs">{stat.label}</div>
        </div>
      ))}
    </div>

    <div className="mt-4 flex items-center justify-between text-sm">
      <div className="text-gray-500">
        进球 <span className="text-white font-semibold">{team.gf}</span>
      </div>
      <div className="text-gray-500">
        失球 <span className="text-white font-semibold">{team.ga}</span>
      </div>
      <div className="text-gray-500">
        净胜球 <span className={`font-semibold ${team.gf - team.ga >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {team.gf - team.ga > 0 ? `+${team.gf - team.ga}` : team.gf - team.ga}
        </span>
      </div>
    </div>
  </div>
);

const Teams = () => {
  const [search, setSearch] = useState('');
  const [groupFilter, setGroupFilter] = useState('全部');

  const filtered = allTeams.filter((t) => {
    const matchSearch = t.name.includes(search) || t.code.includes(search.toUpperCase());
    const matchGroup = groupFilter === '全部' || t.groupId === groupFilter;
    return matchSearch && matchGroup;
  });

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-2">参赛球队</h1>
          <p className="text-gray-500">2026 FIFA 世界杯 {allTeams.length} 支参赛球队</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="搜索球队..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 w-full md:w-64"
          />
          <div className="flex gap-2 flex-wrap">
            {['全部', 'A', 'B', 'C', 'D'].map((g) => (
              <button
                key={g}
                onClick={() => setGroupFilter(g)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  groupFilter === g
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {g === '全部' ? '全部小组' : `小组 ${g}`}
              </button>
            ))}
          </div>
        </div>

        {/* Teams grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((team) => (
            <TeamCard key={team.code} team={team} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-600">
            <div className="text-4xl mb-3">🔍</div>
            <p>未找到匹配的球队</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
