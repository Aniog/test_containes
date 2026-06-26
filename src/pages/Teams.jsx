import { useState } from 'react';
import { Shield, Trophy, Users, Search } from 'lucide-react';
import { groups } from '../data/worldcup';

// Build full teams list from groups data
const allTeams = groups.flatMap((g) =>
  g.teams.map((t) => ({ ...t, group: g.id }))
);

const CONTINENTS = {
  '全部': null,
  '欧洲': ['Spain', 'France', 'England', 'Germany', 'Portugal', 'Netherlands', 'Belgium', 'Croatia', 'Poland', 'Italy', 'Switzerland', 'Denmark', 'Serbia', 'Austria', 'Scotland', 'Iceland'],
  '南美洲': ['Brazil', 'Argentina', 'Uruguay', 'Colombia', 'Ecuador', 'Bolivia', 'Chile', 'Peru', 'Venezuela', 'Paraguay'],
  '北美洲': ['USA', 'Mexico', 'Canada', 'Panama', 'Costa Rica', 'Jamaica', 'Honduras', 'El Salvador'],
  '非洲': ['Morocco', 'Senegal', 'Nigeria', 'Cameroon', 'Tunisia', 'Ghana', 'Egypt', 'Algeria', 'South Africa', 'Mali'],
  '亚洲': ['Japan', 'South Korea', 'Saudi Arabia', 'Iran', 'Australia', 'Qatar', 'Iraq', 'Jordan'],
  '大洋洲': ['New Zealand', 'Fiji'],
};

const TEAM_COLORS = {
  'Brazil': '#22c55e', 'France': '#3b82f6', 'Argentina': '#60a5fa',
  'Spain': '#ef4444', 'England': '#f5c518', 'Portugal': '#f97316',
  'Germany': '#94a3b8', 'Netherlands': '#f97316', 'Belgium': '#ef4444',
  'Croatia': '#ef4444', 'Mexico': '#22c55e', 'USA': '#3b82f6',
  'Canada': '#ef4444', 'Morocco': '#22c55e', 'Senegal': '#22c55e',
  'Japan': '#ef4444', 'South Korea': '#ef4444', 'Australia': '#f5c518',
  'Uruguay': '#60a5fa', 'Colombia': '#f5c518', 'Poland': '#ef4444',
};

const TEAM_COACHES = {
  'Brazil': 'Dorival Júnior', 'France': 'Didier Deschamps', 'Argentina': 'Lionel Scaloni',
  'Spain': 'Luis de la Fuente', 'England': 'Gareth Southgate', 'Portugal': 'Roberto Martínez',
  'Germany': 'Julian Nagelsmann', 'Netherlands': 'Ronald Koeman', 'Belgium': 'Domenico Tedesco',
  'Croatia': 'Zlatko Dalić', 'Mexico': 'Javier Aguirre', 'USA': 'Mauricio Pochettino',
  'Canada': 'Jesse Marsch', 'Morocco': 'Walid Regragui', 'Senegal': 'Aliou Cissé',
  'Japan': 'Hajime Moriyasu', 'South Korea': 'Hong Myung-bo', 'Australia': 'Tony Popovic',
  'Uruguay': 'Marcelo Bielsa', 'Colombia': 'Néstor Lorenzo', 'Poland': 'Michał Probierz',
};

const WORLD_CUP_TITLES = {
  'Brazil': 5, 'Germany': 4, 'Italy': 4, 'Argentina': 3, 'France': 2,
  'Uruguay': 2, 'England': 1, 'Spain': 1,
};

const TeamCard = ({ team }) => {
  const color = TEAM_COLORS[team.name] || '#64748b';
  const coach = TEAM_COACHES[team.name] || 'TBD';
  const titles = WORLD_CUP_TITLES[team.name] || 0;
  const diff = team.gf - team.ga;

  return (
    <div className="bg-[#1a2235] border border-[#2a3550] rounded-2xl overflow-hidden card-hover">
      {/* Color bar */}
      <div className="h-1.5" style={{ backgroundColor: color }} />

      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{team.flag}</span>
            <div>
              <h3 className="text-white font-bold text-base">{team.name}</h3>
              <span className="text-slate-500 text-xs">小组 {team.group}</span>
            </div>
          </div>
          {titles > 0 && (
            <div className="flex items-center gap-1 bg-[#f5c518]/10 rounded-lg px-2 py-1">
              <Trophy className="w-3 h-3 text-[#f5c518]" />
              <span className="text-[#f5c518] text-xs font-bold">{titles}x</span>
            </div>
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: '积分', value: team.pts, highlight: true },
            { label: '胜', value: team.won },
            { label: '进球', value: team.gf },
            { label: '净胜', value: diff > 0 ? `+${diff}` : diff, color: diff > 0 ? 'text-green-400' : diff < 0 ? 'text-red-400' : 'text-slate-400' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0a0e1a] rounded-xl p-2.5 text-center">
              <div className={`font-black text-base ${stat.highlight ? 'text-[#f5c518]' : stat.color || 'text-white'}`}>
                {stat.value}
              </div>
              <div className="text-slate-600 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Coach */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Users className="w-3 h-3" />
          <span>主教练: <span className="text-slate-300">{coach}</span></span>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('全部');

  const filtered = allTeams.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchContinent = continent === '全部' || (CONTINENTS[continent] || []).includes(t.name);
    return matchSearch && matchContinent;
  });

  // Sort by points desc
  const sorted = [...filtered].sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga));

  return (
    <div className="min-h-screen bg-[#0a0e1a] pt-16">
      {/* Header */}
      <div className="bg-[#111827] border-b border-[#2a3550]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-[#f5c518]" />
            <span className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest">参赛球队</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">全部球队</h1>
          <p className="text-slate-400 text-sm">48支球队参加 2026 FIFA 世界杯</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="搜索球队..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1a2235] border border-[#2a3550] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f5c518]/50"
            />
          </div>

          <div className="flex gap-1.5 flex-wrap">
            {Object.keys(CONTINENTS).map((c) => (
              <button
                key={c}
                onClick={() => setContinent(c)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  continent === c
                    ? 'bg-[#f5c518] text-[#0a0e1a]'
                    : 'bg-[#1a2235] border border-[#2a3550] text-slate-400 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-slate-500 text-sm mb-6">显示 {sorted.length} 支球队</p>

        {/* Teams grid */}
        {sorted.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <Shield className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>没有找到匹配的球队</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sorted.map((team) => (
              <TeamCard key={`${team.name}-${team.group}`} team={team} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
