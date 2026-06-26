import { Link } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';
import { matches } from '../../data/worldcup';

const StatusBadge = ({ status, minute }) => {
  if (status === 'live') {
    return (
      <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 rounded-full px-2.5 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
        <span className="text-red-400 text-xs font-semibold">{minute}'</span>
      </div>
    );
  }
  if (status === 'finished') {
    return (
      <span className="text-slate-500 text-xs font-medium bg-slate-800 rounded-full px-2.5 py-1">
        已结束
      </span>
    );
  }
  return (
    <div className="flex items-center gap-1 text-blue-400 text-xs font-medium">
      <Clock className="w-3 h-3" />
      <span>即将开始</span>
    </div>
  );
};

const MatchCard = ({ match }) => (
  <div className="bg-[#1a2235] border border-[#2a3550] rounded-2xl p-4 card-hover">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs text-slate-500 font-medium">小组 {match.group} · {match.date}</span>
      <StatusBadge status={match.status} minute={match.minute} />
    </div>

    <div className="flex items-center justify-between gap-3">
      <div className="flex-1 text-right">
        <div className="text-2xl mb-1">{match.homeFlag}</div>
        <div className="text-white font-semibold text-sm">{match.homeTeam}</div>
      </div>

      <div className="flex items-center gap-2 min-w-[80px] justify-center">
        {match.status === 'upcoming' ? (
          <div className="text-center">
            <div className="text-[#f5c518] font-black text-lg">VS</div>
            <div className="text-slate-500 text-xs">{match.time}</div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-white font-black text-2xl">
              {match.homeScore ?? '-'} <span className="text-slate-500">:</span> {match.awayScore ?? '-'}
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 text-left">
        <div className="text-2xl mb-1">{match.awayFlag}</div>
        <div className="text-white font-semibold text-sm">{match.awayTeam}</div>
      </div>
    </div>

    <div className="mt-3 pt-3 border-t border-[#2a3550]">
      <p className="text-slate-600 text-xs text-center truncate">{match.venue}</p>
    </div>
  </div>
);

const HomeLiveMatches = () => {
  const liveMatches = matches.filter((m) => m.status === 'live');
  const recentMatches = matches.filter((m) => m.status === 'finished').slice(-4);
  const upcomingMatches = matches.filter((m) => m.status === 'upcoming').slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Live matches */}
        {liveMatches.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">正在直播</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {liveMatches.map((m) => <MatchCard key={m.id} match={m} />)}
            </div>
          </div>
        )}

        {/* Recent results */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">最新战报</h2>
            <Link to="/matches" className="flex items-center gap-1 text-[#f5c518] text-sm hover:text-yellow-400 transition-colors">
              全部赛程 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentMatches.map((m) => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">即将开赛</h2>
            <Link to="/matches" className="flex items-center gap-1 text-[#f5c518] text-sm hover:text-yellow-400 transition-colors">
              全部赛程 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingMatches.map((m) => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLiveMatches;
