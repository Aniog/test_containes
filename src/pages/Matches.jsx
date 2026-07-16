import { useState } from 'react';
import { Clock, MapPin, Filter } from 'lucide-react';
import { matches } from '@/data/worldcup';

const stages = ['全部', '小组赛', '16强', '8强', '半决赛', '决赛'];

function MatchRow({ match }) {
  const isFinished = match.status === 'finished';
  const isLive = match.status === 'live';
  const isUpcoming = match.status === 'upcoming';

  return (
    <div className={`bg-[#0d1526] border rounded-xl p-5 transition-all duration-300 hover:border-[#f5a623]/30 hover:shadow-lg hover:shadow-[#f5a623]/5 ${
      isLive ? 'border-[#e63946]/40' : 'border-gray-700/50'
    }`}>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Stage & Date */}
        <div className="md:w-36 flex-shrink-0">
          <div className="text-[#f5a623] text-xs font-bold bg-[#f5a623]/10 px-2 py-1 rounded-full inline-block mb-1">
            {match.stage}
          </div>
          <div className="text-gray-500 text-xs">{match.date}</div>
          {isUpcoming && (
            <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
              <Clock className="w-3 h-3" />
              {match.time}
            </div>
          )}
        </div>

        {/* Teams & Score */}
        <div className="flex-1 flex items-center justify-between md:justify-center gap-4">
          {/* Home */}
          <div className="flex items-center gap-3 flex-1 md:flex-none md:w-40 md:justify-end">
            <span className="text-white font-bold text-sm md:text-base">{match.homeTeam}</span>
            <span className="text-2xl">{match.homeFlag}</span>
          </div>

          {/* Score */}
          <div className="text-center min-w-[70px]">
            {isFinished || isLive ? (
              <>
                <div className="text-2xl font-black text-white">
                  {match.homeScore}
                  <span className="text-gray-600 mx-1">-</span>
                  {match.awayScore}
                </div>
                {isLive && (
                  <span className="text-[#e63946] text-xs font-bold animate-pulse">LIVE</span>
                )}
                {isFinished && (
                  <span className="text-gray-600 text-xs">FT</span>
                )}
              </>
            ) : (
              <div className="text-gray-500 font-bold">VS</div>
            )}
            {match.note && (
              <div className="text-[#f5a623] text-xs mt-1 text-center">{match.note}</div>
            )}
          </div>

          {/* Away */}
          <div className="flex items-center gap-3 flex-1 md:flex-none md:w-40 md:justify-start">
            <span className="text-2xl">{match.awayFlag}</span>
            <span className="text-white font-bold text-sm md:text-base">{match.awayTeam}</span>
          </div>
        </div>

        {/* Venue */}
        <div className="md:w-52 flex-shrink-0 flex items-center gap-1 text-gray-500 text-xs">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{match.venue}</span>
        </div>
      </div>
    </div>
  );
}

export default function Matches() {
  const [activeStage, setActiveStage] = useState('全部');

  const filtered = activeStage === '全部'
    ? matches
    : matches.filter((m) => m.stage === activeStage);

  const upcoming = filtered.filter((m) => m.status === 'upcoming');
  const finished = filtered.filter((m) => m.status === 'finished');

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#0d1526] to-[#0a0e1a] border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-2">FIFA World Cup 2026</div>
          <h1 className="text-4xl md:text-5xl font-black text-white">赛程安排</h1>
          <p className="text-gray-400 mt-2">共 {matches.length} 场比赛 · 从小组赛到决赛</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-gray-400" />
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeStage === stage
                  ? 'bg-[#f5a623] text-black'
                  : 'bg-[#0d1526] border border-gray-700 text-gray-300 hover:border-[#f5a623]/40 hover:text-white'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Upcoming Matches */}
        {upcoming.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#f5a623] rounded-full" />
              即将进行
            </h2>
            <div className="space-y-3">
              {upcoming.map((match) => (
                <MatchRow key={match.id} match={match} />
              ))}
            </div>
          </div>
        )}

        {/* Finished Matches */}
        {finished.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full" />
              已结束
            </h2>
            <div className="space-y-3">
              {finished.map((match) => (
                <MatchRow key={match.id} match={match} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <div className="text-4xl mb-4">⚽</div>
            <p>暂无该阶段比赛数据</p>
          </div>
        )}
      </div>
    </div>
  );
}
