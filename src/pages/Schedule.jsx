import { useState } from 'react';
import { matches } from '@/data/worldcup';
import { Calendar, MapPin, Clock } from 'lucide-react';

const MatchRow = ({ match }) => {
  const isFinished = match.status === 'finished';
  return (
    <div className="bg-[#1C2E45] border border-[#2D4A6B] rounded-xl p-5 hover:border-amber-400/40 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="bg-[#243B55] text-slate-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {match.group ? `小组 ${match.group}` : '淘汰赛'}
          </span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            isFinished
              ? 'bg-green-900/40 text-green-400'
              : 'bg-amber-400/20 text-amber-400'
          }`}>
            {isFinished ? '已结束' : '即将开始'}
          </span>
        </div>
        <div className="flex items-center gap-1 text-slate-500 text-xs">
          <MapPin className="w-3 h-3" />
          <span>{match.venue}, {match.city}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {/* Home team */}
        <div className="flex-1 flex items-center gap-3 justify-end">
          <div className="text-right">
            <div className="text-white font-black text-lg">{match.home.name}</div>
          </div>
          <div className="text-4xl">{match.home.flag}</div>
        </div>

        {/* Score / Time */}
        <div className="px-6 text-center min-w-[100px]">
          {isFinished ? (
            <div className="text-3xl font-black text-white">
              {match.homeScore}
              <span className="text-slate-500 mx-2">-</span>
              {match.awayScore}
            </div>
          ) : (
            <div>
              <div className="text-amber-400 font-black text-xl">{match.time}</div>
              <div className="text-slate-500 text-xs mt-1 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" />
                {match.date}
              </div>
            </div>
          )}
        </div>

        {/* Away team */}
        <div className="flex-1 flex items-center gap-3">
          <div className="text-4xl">{match.away.flag}</div>
          <div className="text-left">
            <div className="text-white font-black text-lg">{match.away.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: '全部' },
    { key: 'finished', label: '已结束' },
    { key: 'upcoming', label: '即将开始' },
  ];

  const displayed = filter === 'all' ? matches : matches.filter((m) => m.status === filter);

  // Group by date
  const byDate = displayed.reduce((acc, m) => {
    if (!acc[m.date]) acc[m.date] = [];
    acc[m.date].push(m);
    return acc;
  }, {});

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' });
  };

  return (
    <div className="bg-[#0D1B2A] min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-7 h-7 text-amber-400" />
            <h1 className="text-4xl font-black text-white uppercase tracking-wide">赛程表</h1>
          </div>
          <p className="text-slate-400">FIFA 世界杯 2026 小组赛赛程</p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-colors ${
                filter === f.key ? 'bg-amber-400 text-[#0D1B2A]' : 'bg-[#1C2E45] text-slate-300 hover:bg-[#243B55]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Matches by date */}
        {Object.keys(byDate).sort().map((date) => (
          <div key={date} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-[#2D4A6B]" />
              <span className="text-slate-400 text-sm font-semibold whitespace-nowrap">
                {formatDate(date)}
              </span>
              <div className="h-px flex-1 bg-[#2D4A6B]" />
            </div>
            <div className="flex flex-col gap-4">
              {byDate[date].map((m) => <MatchRow key={m.id} match={m} />)}
            </div>
          </div>
        ))}

        {displayed.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>暂无比赛数据</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
