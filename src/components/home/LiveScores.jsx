import { Clock } from 'lucide-react';

const matches = [
  {
    id: 'match-1',
    league: 'Premier League',
    leagueShort: 'EPL',
    status: 'live',
    minute: "72'",
    homeTeam: 'Manchester City',
    homeShort: 'MCI',
    homeScore: 2,
    awayTeam: 'Arsenal',
    awayShort: 'ARS',
    awayScore: 1,
    stadium: 'Etihad Stadium',
  },
  {
    id: 'match-2',
    league: 'La Liga',
    leagueShort: 'LAL',
    status: 'live',
    minute: "58'",
    homeTeam: 'Real Madrid',
    homeShort: 'RMA',
    homeScore: 3,
    awayTeam: 'Barcelona',
    awayShort: 'BAR',
    awayScore: 2,
    stadium: 'Santiago Bernabéu',
  },
  {
    id: 'match-3',
    league: 'Serie A',
    leagueShort: 'SA',
    status: 'ft',
    minute: 'FT',
    homeTeam: 'Juventus',
    homeShort: 'JUV',
    homeScore: 1,
    awayTeam: 'AC Milan',
    awayShort: 'ACM',
    awayScore: 1,
    stadium: 'Allianz Stadium',
  },
  {
    id: 'match-4',
    league: 'Bundesliga',
    leagueShort: 'BUN',
    status: 'upcoming',
    minute: '20:45',
    homeTeam: 'Bayern Munich',
    homeShort: 'BAY',
    homeScore: null,
    awayTeam: 'Borussia Dortmund',
    awayShort: 'BVB',
    awayScore: null,
    stadium: 'Allianz Arena',
  },
  {
    id: 'match-5',
    league: 'Ligue 1',
    leagueShort: 'L1',
    status: 'upcoming',
    minute: '21:00',
    homeTeam: 'PSG',
    homeShort: 'PSG',
    homeScore: null,
    awayTeam: 'Marseille',
    awayShort: 'MAR',
    awayScore: null,
    stadium: 'Parc des Princes',
  },
  {
    id: 'match-6',
    league: 'Champions League',
    leagueShort: 'UCL',
    status: 'ft',
    minute: 'FT',
    homeTeam: 'Inter Milan',
    homeShort: 'INT',
    homeScore: 0,
    awayTeam: 'Chelsea',
    awayShort: 'CHE',
    awayScore: 2,
    stadium: 'San Siro',
  },
];

function StatusBadge({ status, minute }) {
  if (status === 'live') {
    return (
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-red-400 text-xs font-bold">{minute}</span>
      </div>
    );
  }
  if (status === 'ft') {
    return <span className="text-gray-500 text-xs font-bold uppercase">Full Time</span>;
  }
  return (
    <div className="flex items-center gap-1 text-gray-400">
      <Clock className="w-3 h-3" />
      <span className="text-xs font-semibold">{minute}</span>
    </div>
  );
}

function MatchCard({ match }) {
  const isLive = match.status === 'live';
  const isUpcoming = match.status === 'upcoming';

  return (
    <div className={`bg-pitch-card border rounded-2xl p-5 transition-all hover:border-soccer-green/40 ${isLive ? 'border-red-600/30' : 'border-gray-800'}`}>
      {/* League + status */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{match.league}</span>
        <StatusBadge status={match.status} minute={match.minute} />
      </div>

      {/* Teams + Score */}
      <div className="flex items-center justify-between gap-3">
        {/* Home */}
        <div className="flex-1 text-right">
          <div className="text-white font-bold text-sm md:text-base leading-tight">{match.homeTeam}</div>
          <div className="text-gray-500 text-xs mt-0.5">{match.homeShort}</div>
        </div>

        {/* Score */}
        <div className="flex items-center gap-2 px-3">
          {isUpcoming ? (
            <span className="text-gray-400 font-black text-xl tracking-widest">vs</span>
          ) : (
            <>
              <span className={`font-black text-2xl md:text-3xl ${isLive ? 'text-white' : 'text-gray-300'}`}>
                {match.homeScore}
              </span>
              <span className="text-gray-600 font-bold text-xl">–</span>
              <span className={`font-black text-2xl md:text-3xl ${isLive ? 'text-white' : 'text-gray-300'}`}>
                {match.awayScore}
              </span>
            </>
          )}
        </div>

        {/* Away */}
        <div className="flex-1 text-left">
          <div className="text-white font-bold text-sm md:text-base leading-tight">{match.awayTeam}</div>
          <div className="text-gray-500 text-xs mt-0.5">{match.awayShort}</div>
        </div>
      </div>

      {/* Stadium */}
      <div className="mt-4 pt-3 border-t border-gray-800 text-center">
        <span className="text-gray-600 text-xs">{match.stadium}</span>
      </div>
    </div>
  );
}

export default function LiveScores() {
  const liveMatches = matches.filter((m) => m.status === 'live');
  const otherMatches = matches.filter((m) => m.status !== 'live');

  return (
    <section id="scores" className="py-16 md:py-24 bg-pitch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Live</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Today's Matches</h2>
          </div>
          <button className="text-soccer-green hover:text-soccer-green-light text-sm font-bold uppercase tracking-widest bg-transparent border-0 transition-colors">
            View All →
          </button>
        </div>

        {/* Live matches */}
        {liveMatches.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">
              🔴 In Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {liveMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        )}

        {/* Other matches */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
            Completed & Upcoming
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
