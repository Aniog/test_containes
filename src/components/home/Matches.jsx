import { useState } from 'react';
import { matches } from '@/data/worldcup';
import { Clock, MapPin, Flame } from 'lucide-react';

const MatchCard = ({ match }) => {
  const isLive = match.status === 'live';
  const isFinished = match.status === 'finished';
  const isUpcoming = match.status === 'upcoming';

  return (
    <div className={`bg-wc-card border rounded-xl p-4 hover:border-wc-gold/50 transition-all duration-200 ${
      isLive ? 'border-wc-red/60 shadow-lg shadow-wc-red/10' : 'border-wc-border'
    }`}>
      {/* Match Meta */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-500 font-medium">第 {match.group} 组</span>
        {isLive && (
          <span className="flex items-center gap-1 bg-wc-red text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">
            <Flame className="w-3 h-3" />
            LIVE {match.minute}'
          </span>
        )}
        {isFinished && (
          <span className="text-xs text-gray-500 font-medium">已结束</span>
        )}
        {isUpcoming && (
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            {match.time}
          </span>
        )}
      </div>

      {/* Teams & Score */}
      <div className="flex items-center justify-between gap-2">
        {/* Home Team */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <span className="text-3xl">{match.homeTeam.flag}</span>
          <span className="text-white font-bold text-sm text-center leading-tight">{match.homeTeam.name}</span>
        </div>

        {/* Score */}
        <div className="flex flex-col items-center gap-1 min-w-[80px]">
          {isUpcoming ? (
            <div className="text-gray-500 font-black text-xl">VS</div>
          ) : (
            <div className="flex items-center gap-2">
              <span className={`text-3xl font-black ${isLive ? 'text-wc-red' : 'text-white'}`}>
                {match.homeScore}
              </span>
              <span className="text-gray-500 text-xl font-bold">:</span>
              <span className={`text-3xl font-black ${isLive ? 'text-wc-red' : 'text-white'}`}>
                {match.awayScore}
              </span>
            </div>
          )}
          <span className="text-xs text-gray-500">{match.date}</span>
        </div>

        {/* Away Team */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <span className="text-3xl">{match.awayTeam.flag}</span>
          <span className="text-white font-bold text-sm text-center leading-tight">{match.awayTeam.name}</span>
        </div>
      </div>

      {/* Venue */}
      <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
        <MapPin className="w-3 h-3 flex-shrink-0" />
        <span className="truncate">{match.venue}</span>
      </div>
    </div>
  );
};

const Matches = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: '全部' },
    { key: 'live', label: '进行中' },
    { key: 'upcoming', label: '即将开始' },
    { key: 'finished', label: '已结束' },
  ];

  const filtered = filter === 'all' ? matches : matches.filter((m) => m.status === filter);

  return (
    <section id="matches" className="py-20 bg-wc-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-wc-gold mb-2">赛事日历</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">比赛赛程</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                filter === f.key
                  ? 'bg-wc-gold text-black'
                  : 'bg-wc-card border border-wc-border text-gray-400 hover:text-white hover:border-gray-500'
              }`}
            >
              {f.label}
              {f.key === 'live' && (
                <span className="ml-1.5 w-1.5 h-1.5 bg-wc-red rounded-full inline-block animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">暂无相关比赛</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Matches;
