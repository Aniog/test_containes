import { Link } from 'react-router-dom';
import { matches } from '../../data/worldcup';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const statusConfig = {
  LIVE: { label: '直播中', className: 'bg-red-600 text-white animate-pulse' },
  FT: { label: '已结束', className: 'bg-gray-700 text-gray-300' },
  UPCOMING: { label: '即将开始', className: 'bg-green-700 text-green-200' },
};

const MatchCard = ({ match }) => {
  const status = statusConfig[match.status];
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-xs">小组 {match.group}</span>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status.className}`}>
          {match.status === 'LIVE' ? `${match.minute}' ${status.label}` : status.label}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-3xl">{match.homeTeam.flag}</span>
          <span className="text-white text-sm font-semibold text-center">{match.homeTeam.name}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          {match.status === 'UPCOMING' ? (
            <div className="text-center">
              <div className="text-yellow-400 font-bold text-lg">{match.time}</div>
              <div className="text-gray-500 text-xs">{match.date}</div>
            </div>
          ) : (
            <div className="text-3xl font-black text-white">
              {match.homeScore} <span className="text-gray-600">-</span> {match.awayScore}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-3xl">{match.awayTeam.flag}</span>
          <span className="text-white text-sm font-semibold text-center">{match.awayTeam.name}</span>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-4 text-gray-600 text-xs">
        <MapPin className="w-3 h-3" />
        <span>{match.venue}</span>
      </div>
    </div>
  );
};

const FeaturedMatches = () => {
  const featured = matches.filter((m) => m.status === 'LIVE' || m.status === 'UPCOMING').slice(0, 3);
  const recent = matches.filter((m) => m.status === 'FT').slice(-3);
  const display = [...featured, ...recent].slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">赛程赛果</h2>
            <p className="text-gray-500 mt-1">最新比赛动态</p>
          </div>
          <Link
            to="/matches"
            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-medium text-sm transition-colors"
          >
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {display.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMatches;
