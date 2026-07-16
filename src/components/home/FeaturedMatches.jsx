import { Link } from 'react-router-dom';
import { Clock, MapPin, ChevronRight } from 'lucide-react';
import { matches } from '@/data/worldcup';

function MatchCard({ match }) {
  const isLive = match.status === 'live';
  const isFinished = match.status === 'finished';
  const isUpcoming = match.status === 'upcoming';

  return (
    <div className={`bg-[#0d1526] border rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#f5a623]/10 hover:border-[#f5a623]/30 ${
      isLive ? 'border-[#e63946]/50' : 'border-gray-700/50'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[#f5a623] text-xs font-bold bg-[#f5a623]/10 px-2 py-1 rounded-full">
            {match.stage}
          </span>
          {match.group && (
            <span className="text-gray-400 text-xs">组 {match.group}</span>
          )}
        </div>
        {isLive && (
          <span className="flex items-center gap-1 bg-[#e63946] text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            LIVE
          </span>
        )}
        {isFinished && (
          <span className="text-gray-500 text-xs">已结束</span>
        )}
        {isUpcoming && (
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {match.time}
          </span>
        )}
      </div>

      {/* Teams & Score */}
      <div className="flex items-center justify-between gap-4">
        {/* Home Team */}
        <div className="flex-1 text-center">
          <div className="text-3xl mb-1">{match.homeFlag}</div>
          <div className="text-white font-bold text-sm">{match.homeTeam}</div>
        </div>

        {/* Score */}
        <div className="text-center min-w-[80px]">
          {isFinished || isLive ? (
            <div className="text-3xl font-black text-white">
              {match.homeScore}
              <span className="text-gray-500 mx-1">:</span>
              {match.awayScore}
            </div>
          ) : (
            <div className="text-gray-500 font-bold text-lg">VS</div>
          )}
          {match.note && (
            <div className="text-[#f5a623] text-xs mt-1">{match.note}</div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex-1 text-center">
          <div className="text-3xl mb-1">{match.awayFlag}</div>
          <div className="text-white font-bold text-sm">{match.awayTeam}</div>
        </div>
      </div>

      {/* Venue & Date */}
      <div className="mt-4 pt-3 border-t border-gray-700/50 flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <MapPin className="w-3 h-3" />
          <span className="truncate max-w-[160px]">{match.venue}</span>
        </div>
        <span className="text-gray-500 text-xs">{match.date}</span>
      </div>
    </div>
  );
}

export default function FeaturedMatches() {
  const featured = matches.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="text-[#f5a623] text-sm font-bold tracking-widest uppercase mb-2">精彩赛事</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">近期比赛</h2>
          </div>
          <Link
            to="/matches"
            className="flex items-center gap-1 text-[#f5a623] font-semibold text-sm hover:gap-2 transition-all duration-200"
          >
            查看全部 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Match Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
}
