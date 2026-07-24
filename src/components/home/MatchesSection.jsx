import { useState } from 'react';
import { Clock, ChevronRight } from 'lucide-react';

const tabs = ['All', 'Live', 'Today', 'Upcoming'];

const matches = [
  {
    id: 1,
    league: 'Premier League',
    leagueShort: 'PL',
    status: 'live',
    minute: "67'",
    homeTeam: 'Manchester City',
    homeShort: 'MCI',
    homeScore: 2,
    awayTeam: 'Arsenal',
    awayShort: 'ARS',
    awayScore: 1,
    stadium: 'Etihad Stadium',
  },
  {
    id: 2,
    league: 'La Liga',
    leagueShort: 'LL',
    status: 'live',
    minute: "45+2'",
    homeTeam: 'Real Madrid',
    homeShort: 'RMA',
    homeScore: 3,
    awayTeam: 'Barcelona',
    awayShort: 'BAR',
    awayScore: 2,
    stadium: 'Santiago Bernabéu',
  },
  {
    id: 3,
    league: 'Serie A',
    leagueShort: 'SA',
    status: 'today',
    minute: '20:45',
    homeTeam: 'Juventus',
    homeShort: 'JUV',
    homeScore: null,
    awayTeam: 'AC Milan',
    awayShort: 'ACM',
    awayScore: null,
    stadium: 'Allianz Stadium',
  },
  {
    id: 4,
    league: 'Bundesliga',
    leagueShort: 'BL',
    status: 'today',
    minute: '18:30',
    homeTeam: 'Bayern Munich',
    homeShort: 'BAY',
    homeScore: null,
    awayTeam: 'Borussia Dortmund',
    awayShort: 'BVB',
    awayScore: null,
    stadium: 'Allianz Arena',
  },
  {
    id: 5,
    league: 'Ligue 1',
    leagueShort: 'L1',
    status: 'upcoming',
    minute: 'Tomorrow',
    homeTeam: 'PSG',
    homeShort: 'PSG',
    homeScore: null,
    awayTeam: 'Marseille',
    awayShort: 'MAR',
    awayScore: null,
    stadium: 'Parc des Princes',
  },
  {
    id: 6,
    league: 'Premier League',
    leagueShort: 'PL',
    status: 'upcoming',
    minute: 'Sat 15:00',
    homeTeam: 'Liverpool',
    homeShort: 'LIV',
    homeScore: null,
    awayTeam: 'Chelsea',
    awayShort: 'CHE',
    awayScore: null,
    stadium: 'Anfield',
  },
];

const leagueColors = {
  PL: 'bg-purple-500',
  LL: 'bg-orange-500',
  SA: 'bg-blue-500',
  BL: 'bg-yellow-500',
  L1: 'bg-sky-500',
};

function MatchCard({ match }) {
  const isLive = match.status === 'live';
  const hasScore = match.homeScore !== null;

  return (
    <div className="bg-gray-900 border border-gray-800 hover:border-green-500/40 rounded-xl p-4 transition-all duration-200 cursor-pointer group">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${leagueColors[match.leagueShort] || 'bg-gray-500'}`} />
          <span className="text-xs text-gray-500 font-medium">{match.league}</span>
        </div>
        {isLive ? (
          <span className="flex items-center gap-1 text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            {match.minute}
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {match.minute}
          </span>
        )}
      </div>

      {/* Teams & Score */}
      <div className="flex items-center justify-between gap-4">
        {/* Home */}
        <div className="flex-1 text-right">
          <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">{match.homeTeam}</div>
          <div className="text-xs text-gray-600 mt-0.5">{match.homeShort}</div>
        </div>

        {/* Score */}
        <div className="flex items-center gap-2 min-w-[80px] justify-center">
          {hasScore ? (
            <>
              <span className={`text-2xl font-black ${isLive ? 'text-white' : 'text-gray-400'}`}>{match.homeScore}</span>
              <span className="text-gray-600 font-bold">–</span>
              <span className={`text-2xl font-black ${isLive ? 'text-white' : 'text-gray-400'}`}>{match.awayScore}</span>
            </>
          ) : (
            <span className="text-gray-600 font-bold text-sm">vs</span>
          )}
        </div>

        {/* Away */}
        <div className="flex-1 text-left">
          <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">{match.awayTeam}</div>
          <div className="text-xs text-gray-600 mt-0.5">{match.awayShort}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between">
        <span className="text-xs text-gray-600">{match.stadium}</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-700 group-hover:text-green-500 transition-colors" />
      </div>
    </div>
  );
}

export default function MatchesSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = matches.filter((m) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Live') return m.status === 'live';
    if (activeTab === 'Today') return m.status === 'today';
    if (activeTab === 'Upcoming') return m.status === 'upcoming';
    return true;
  });

  return (
    <section id="matches" className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2">Live & Upcoming</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Today's Matches</h2>
          </div>
          <div className="flex items-center gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  activeTab === tab
                    ? 'bg-green-500 text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
                {tab === 'Live' && (
                  <span className="ml-1.5 w-1.5 h-1.5 bg-red-500 rounded-full inline-block animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Match Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-600">
            <p className="text-lg font-semibold">No matches found</p>
            <p className="text-sm mt-1">Try a different filter</p>
          </div>
        )}
      </div>
    </section>
  );
}
