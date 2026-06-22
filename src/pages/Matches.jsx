import { useState } from 'react';
import { matches } from '../data/worldcup';
import { MapPin, Clock } from 'lucide-react';

const statusConfig = {
  LIVE: { label: '直播中', className: 'bg-red-600 text-white' },
  FT: { label: '已结束', className: 'bg-gray-700 text-gray-300' },
  UPCOMING: { label: '即将开始', className: 'bg-green-700/80 text-green-200' },
};

const groups = ['全部', 'A', 'B', 'C', 'D'];
const statusFilters = ['全部', '直播中', '已结束', '即将开始'];
const statusMap = { '直播中': 'LIVE', '已结束': 'FT', '即将开始': 'UPCOMING' };

const MatchRow = ({ match }) => {
  const status = statusConfig[match.status];
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-xs font-medium">小组 {match.group}</span>
          <span className="text-gray-700">·</span>
          <span className="text-gray-500 text-xs">{match.date}</span>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status.className}`}>
          {match.status === 'LIVE' ? `${match.minute}' ${status.label}` : status.label}
        </span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-4xl">{match.homeTeam.flag}</span>
          <div>
            <div className="text-white font-bold text-lg">{match.homeTeam.name}</div>
            <div className="text-gray-600 text-xs">{match.homeTeam.code}</div>
          </div>
        </div>

        <div className="text-center flex-shrink-0">
          {match.status === 'UPCOMING' ? (
            <div>
              <div className="text-yellow-400 font-black text-2xl">{match.time}</div>
              <div className="text-gray-600 text-xs mt-0.5">开球时间</div>
            </div>
          ) : (
            <div>
              <div className="text-white font-black text-3xl tracking-wider">
                {match.homeScore} <span className="text-gray-600">:</span> {match.awayScore}
              </div>
              {match.status === 'LIVE' && (
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-400 text-xs font-semibold">进行中</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 flex-1 justify-end">
          <div className="text-right">
            <div className="text-white font-bold text-lg">{match.awayTeam.name}</div>
            <div className="text-gray-600 text-xs">{match.awayTeam.code}</div>
          </div>
          <span className="text-4xl">{match.awayTeam.flag}</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mt-4 text-gray-600 text-xs">
        <MapPin className="w-3 h-3" />
        <span>{match.venue}</span>
      </div>
    </div>
  );
};

const Matches = () => {
  const [groupFilter, setGroupFilter] = useState('全部');
  const [statusFilter, setStatusFilter] = useState('全部');

  const filtered = matches.filter((m) => {
    const groupOk = groupFilter === '全部' || m.group === groupFilter;
    const statusOk = statusFilter === '全部' || m.status === statusMap[statusFilter];
    return groupOk && statusOk;
  });

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-2">赛程赛果</h1>
          <p className="text-gray-500">2026 FIFA 世界杯全部比赛</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">小组：</span>
            <div className="flex gap-1">
              {groups.map((g) => (
                <button
                  key={g}
                  onClick={() => setGroupFilter(g)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    groupFilter === g
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">状态：</span>
            <div className="flex gap-1">
              {statusFilters.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    statusFilter === s
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Match list */}
        <div className="flex flex-col gap-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-600">
              <div className="text-4xl mb-3">⚽</div>
              <p>暂无符合条件的比赛</p>
            </div>
          ) : (
            filtered.map((match) => <MatchRow key={match.id} match={match} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Matches;
