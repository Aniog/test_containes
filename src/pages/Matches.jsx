import { useState } from 'react';
import { Calendar, Clock, MapPin, Filter } from 'lucide-react';
import { matches } from '../data/worldcup';

const STATUS_LABELS = {
  all: '全部',
  live: '直播中',
  finished: '已结束',
  upcoming: '即将开始',
};

const GROUP_LABELS = ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const StatusBadge = ({ status, minute }) => {
  if (status === 'live') {
    return (
      <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 rounded-full px-3 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
        <span className="text-red-400 text-xs font-semibold">{minute}'</span>
      </div>
    );
  }
  if (status === 'finished') {
    return <span className="text-slate-500 text-xs bg-slate-800 rounded-full px-3 py-1">已结束</span>;
  }
  return (
    <div className="flex items-center gap-1 text-blue-400 text-xs font-medium bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
      <Clock className="w-3 h-3" />
      <span>即将开始</span>
    </div>
  );
};

const MatchRow = ({ match }) => (
  <div className="bg-[#1a2235] border border-[#2a3550] rounded-2xl p-5 card-hover">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-[#f5c518] bg-[#f5c518]/10 rounded-lg px-2.5 py-1">
          小组 {match.group}
        </span>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <Calendar className="w-3 h-3" />
          <span>{match.date}</span>
          {match.status === 'upcoming' && (
            <>
              <span>·</span>
              <Clock className="w-3 h-3" />
              <span>{match.time}</span>
            </>
          )}
        </div>
      </div>
      <StatusBadge status={match.status} minute={match.minute} />
    </div>

    <div className="flex items-center gap-4">
      {/* Home team */}
      <div className="flex-1 flex items-center gap-3 justify-end">
        <div className="text-right">
          <div className="text-white font-bold text-base md:text-lg">{match.homeTeam}</div>
        </div>
        <span className="text-3xl md:text-4xl">{match.homeFlag}</span>
      </div>

      {/* Score */}
      <div className="flex-shrink-0 text-center min-w-[80px]">
        {match.status === 'upcoming' ? (
          <div className="text-[#f5c518] font-black text-xl">VS</div>
        ) : (
          <div className="text-white font-black text-2xl md:text-3xl">
            {match.homeScore} <span className="text-slate-500 font-light">:</span> {match.awayScore}
          </div>
        )}
      </div>

      {/* Away team */}
      <div className="flex-1 flex items-center gap-3">
        <span className="text-3xl md:text-4xl">{match.awayFlag}</span>
        <div>
          <div className="text-white font-bold text-base md:text-lg">{match.awayTeam}</div>
        </div>
      </div>
    </div>

    <div className="mt-4 pt-4 border-t border-[#2a3550] flex items-center gap-1.5 text-slate-600 text-xs">
      <MapPin className="w-3 h-3" />
      <span>{match.venue}</span>
    </div>
  </div>
);

const Matches = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [groupFilter, setGroupFilter] = useState('全部');

  const filtered = matches.filter((m) => {
    const statusOk = statusFilter === 'all' || m.status === statusFilter;
    const groupOk = groupFilter === '全部' || m.group === groupFilter;
    return statusOk && groupOk;
  });

  const liveCount = matches.filter((m) => m.status === 'live').length;

  return (
    <div className="min-h-screen bg-[#0a0e1a] pt-16">
      {/* Header */}
      <div className="bg-[#111827] border-b border-[#2a3550]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-[#f5c518]" />
            <span className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest">赛程安排</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">全部赛程</h1>
          <p className="text-slate-400 text-sm">
            共 {matches.length} 场比赛 · {liveCount > 0 && <span className="text-red-400">{liveCount} 场正在直播</span>}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="text-slate-500 text-sm">状态:</span>
            <div className="flex gap-1.5 flex-wrap">
              {Object.entries(STATUS_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setStatusFilter(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    statusFilter === key
                      ? 'bg-[#f5c518] text-[#0a0e1a]'
                      : 'bg-[#1a2235] border border-[#2a3550] text-slate-400 hover:text-white'
                  }`}
                >
                  {label}
                  {key === 'live' && liveCount > 0 && (
                    <span className="ml-1 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs">{liveCount}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-sm">小组:</span>
            <div className="flex gap-1.5 flex-wrap">
              {GROUP_LABELS.map((g) => (
                <button
                  key={g}
                  onClick={() => setGroupFilter(g)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    groupFilter === g
                      ? 'bg-[#f5c518] text-[#0a0e1a]'
                      : 'bg-[#1a2235] border border-[#2a3550] text-slate-400 hover:text-white'
                  }`}
                >
                  {g === '全部' ? g : `组${g}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Match list */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>没有符合条件的比赛</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filtered.map((m) => <MatchRow key={m.id} match={m} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
