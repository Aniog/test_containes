import { useState, useEffect } from 'react';
import { Loader2, RefreshCw, Database } from 'lucide-react';
import { fetchTeams, groupTeamsByGroup } from '@/api/teams';
import { groups as staticGroups } from '@/data/worldcup';

function GroupTable({ group }) {
  return (
    <div className="bg-[#0d1526] border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#f5a623]/30 transition-all duration-300">
      {/* Group Header */}
      <div className="bg-gradient-to-r from-[#f5a623]/20 to-transparent border-b border-gray-700/50 px-5 py-3 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#f5a623] rounded-lg flex items-center justify-center">
          <span className="text-black font-black text-sm">{group.id}</span>
        </div>
        <span className="text-white font-bold">第 {group.id} 组</span>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-1 px-4 py-2 border-b border-gray-800/50">
        <div className="col-span-5 text-gray-500 text-xs font-semibold">球队</div>
        <div className="col-span-1 text-gray-500 text-xs font-semibold text-center">场</div>
        <div className="col-span-1 text-gray-500 text-xs font-semibold text-center">胜</div>
        <div className="col-span-1 text-gray-500 text-xs font-semibold text-center">平</div>
        <div className="col-span-1 text-gray-500 text-xs font-semibold text-center">负</div>
        <div className="col-span-1 text-gray-500 text-xs font-semibold text-center">净</div>
        <div className="col-span-2 text-gray-500 text-xs font-semibold text-right">积分</div>
      </div>

      {/* Teams */}
      {group.teams.map((team, idx) => {
        const gf = team.goals_for ?? team.gf ?? 0;
        const ga = team.goals_against ?? team.ga ?? 0;
        const pts = team.points ?? team.pts ?? 0;
        const gd = gf - ga;
        const isQualified = idx < 2;
        const displayName = team.name_zh || team.name;

        return (
          <div
            key={team.id || team.name}
            className={`grid grid-cols-12 gap-1 px-4 py-3 items-center transition-colors hover:bg-white/5 ${
              idx < group.teams.length - 1 ? 'border-b border-gray-800/30' : ''
            } ${isQualified ? 'bg-[#2ecc71]/5' : ''}`}
          >
            <div className="col-span-5 flex items-center gap-2">
              <div className={`w-1 h-6 rounded-full flex-shrink-0 ${isQualified ? 'bg-[#2ecc71]' : ''}`} />
              <span className="text-lg">{team.flag}</span>
              <span className={`text-sm font-semibold truncate ${isQualified ? 'text-white' : 'text-gray-300'}`}>
                {displayName}
              </span>
            </div>
            <div className="col-span-1 text-gray-400 text-xs text-center">{team.played ?? 0}</div>
            <div className="col-span-1 text-gray-400 text-xs text-center">{team.won ?? 0}</div>
            <div className="col-span-1 text-gray-400 text-xs text-center">{team.drawn ?? 0}</div>
            <div className="col-span-1 text-gray-400 text-xs text-center">{team.lost ?? 0}</div>
            <div className={`col-span-1 text-xs text-center font-semibold ${
              gd > 0 ? 'text-[#2ecc71]' : gd < 0 ? 'text-[#e63946]' : 'text-gray-400'
            }`}>
              {gd > 0 ? `+${gd}` : gd}
            </div>
            <div className="col-span-2 text-right">
              <span className={`font-black text-base ${isQualified ? 'text-[#f5a623]' : 'text-white'}`}>
                {pts}
              </span>
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="px-4 py-2 border-t border-gray-800/50 flex items-center gap-2">
        <div className="w-1 h-3 bg-[#2ecc71] rounded-full" />
        <span className="text-gray-500 text-xs">晋级淘汰赛</span>
      </div>
    </div>
  );
}

export default function Groups() {
  const [groups, setGroups] = useState(staticGroups);
  const [loading, setLoading] = useState(true);
  const [fromDB, setFromDB] = useState(false);
  const [error, setError] = useState(null);

  const loadTeams = async () => {
    setLoading(true);
    setError(null);
    try {
      const teams = await fetchTeams();
      if (teams.length > 0) {
        const grouped = groupTeamsByGroup(teams);
        setGroups(grouped);
        setFromDB(true);
        console.log(`[Groups] Loaded ${teams.length} teams from database across ${grouped.length} groups`);
      } else {
        console.log('[Groups] No teams in DB, using static data');
      }
    } catch (err) {
      console.error('[Groups] Failed to load from DB:', err);
      setError('数据加载失败，显示本地数据');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeams();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#0d1526] to-[#0a0e1a] border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-2">FIFA World Cup 2026</div>
          <h1 className="text-4xl md:text-5xl font-black text-white">小组赛积分</h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <p className="text-gray-400">共 {groups.length} 个小组 · 每组前两名晋级淘汰赛</p>
            {fromDB && (
              <span className="flex items-center gap-1 text-xs text-[#2ecc71] bg-[#2ecc71]/10 border border-[#2ecc71]/20 px-2 py-0.5 rounded-full">
                <Database className="w-3 h-3" />
                实时数据
              </span>
            )}
            {error && (
              <span className="text-xs text-[#e63946]">{error}</span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Summary Banner */}
        <div className="bg-gradient-to-r from-[#f5a623]/10 to-[#3b82f6]/10 border border-[#f5a623]/20 rounded-xl p-5 mb-10 flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <div>
              <div className="text-white font-bold">2026 FIFA 世界杯</div>
              <div className="text-gray-400 text-sm">小组赛阶段 · 8个小组 · 48支球队</div>
            </div>
          </div>
          <div className="flex gap-6 ml-auto items-center">
            <div className="text-center">
              <div className="text-2xl font-black text-[#f5a623]">48</div>
              <div className="text-gray-400 text-xs">参赛球队</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[#2ecc71]">16</div>
              <div className="text-gray-400 text-xs">晋级名额</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">8</div>
              <div className="text-gray-400 text-xs">小组数量</div>
            </div>
            <button
              onClick={loadTeams}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading
                ? <Loader2 className="w-3 h-3 animate-spin" />
                : <RefreshCw className="w-3 h-3" />
              }
              刷新
            </button>
          </div>
        </div>

        {/* Loading skeleton */}
        {loading && groups.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-[#0d1526] border border-gray-700/50 rounded-xl h-48 animate-pulse" />
            ))}
          </div>
        )}

        {/* Groups Grid */}
        {!loading || groups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((group) => (
              <GroupTable key={group.id} group={group} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
