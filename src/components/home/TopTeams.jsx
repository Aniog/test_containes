import { useEffect, useRef } from 'react';
import { Trophy, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teams = [
  {
    id: 'man-city',
    name: 'Manchester City',
    league: 'Premier League',
    country: 'England',
    rank: 1,
    points: 89,
    wins: 28,
    draws: 5,
    losses: 5,
    goalsFor: 96,
    goalsAgainst: 34,
    form: ['W', 'W', 'W', 'D', 'W'],
    titleId: 'team-man-city-title',
    descId: 'team-man-city-desc',
    imgId: 'team-img-mancity-d4e5f6',
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    league: 'La Liga',
    country: 'Spain',
    rank: 2,
    points: 87,
    wins: 27,
    draws: 6,
    losses: 5,
    goalsFor: 88,
    goalsAgainst: 38,
    form: ['W', 'W', 'D', 'W', 'W'],
    titleId: 'team-real-madrid-title',
    descId: 'team-real-madrid-desc',
    imgId: 'team-img-realmadrid-g7h8i9',
  },
  {
    id: 'bayern',
    name: 'Bayern Munich',
    league: 'Bundesliga',
    country: 'Germany',
    rank: 3,
    points: 84,
    wins: 26,
    draws: 6,
    losses: 6,
    goalsFor: 94,
    goalsAgainst: 42,
    form: ['W', 'L', 'W', 'W', 'W'],
    titleId: 'team-bayern-title',
    descId: 'team-bayern-desc',
    imgId: 'team-img-bayern-j1k2l3',
  },
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    league: 'Ligue 1',
    country: 'France',
    rank: 4,
    points: 82,
    wins: 25,
    draws: 7,
    losses: 6,
    goalsFor: 85,
    goalsAgainst: 40,
    form: ['D', 'W', 'W', 'W', 'D'],
    titleId: 'team-psg-title',
    descId: 'team-psg-desc',
    imgId: 'team-img-psg-m4n5o6',
  },
];

function FormBadge({ result }) {
  const colors = {
    W: 'bg-soccer-green text-white',
    D: 'bg-gray-600 text-white',
    L: 'bg-red-600 text-white',
  };
  return (
    <span className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center ${colors[result]}`}>
      {result}
    </span>
  );
}

function TeamCard({ team }) {
  return (
    <div className="bg-pitch-card border border-gray-800 rounded-2xl overflow-hidden hover:border-soccer-green/40 transition-all group">
      {/* Team image */}
      <div className="relative h-44 overflow-hidden">
        <img
          alt={team.name}
          data-strk-img-id={team.imgId}
          data-strk-img={`[${team.descId}] [${team.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pitch-card via-transparent to-transparent" />
        <div className="absolute top-3 left-3 bg-soccer-yellow text-pitch text-xs font-black px-2.5 py-1 rounded-lg">
          #{team.rank}
        </div>
        <div className="absolute top-3 right-3 bg-pitch/80 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-lg">
          {team.league}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 id={team.titleId} className="text-white font-black text-lg mb-0.5">{team.name}</h3>
        <p id={team.descId} className="text-gray-500 text-xs mb-4">{team.country} · {team.league}</p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: 'PTS', value: team.points },
            { label: 'W', value: team.wins },
            { label: 'GF', value: team.goalsFor },
          ].map((stat) => (
            <div key={stat.label} className="bg-pitch-surface rounded-xl p-2.5 text-center">
              <div className="text-soccer-yellow font-black text-lg leading-none">{stat.value}</div>
              <div className="text-gray-500 text-xs font-bold uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mr-1">Form</span>
          {team.form.map((result, i) => (
            <FormBadge key={i} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TopTeams() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="teams" ref={containerRef} className="py-16 md:py-24 bg-pitch-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-soccer-yellow" />
              <span className="text-soccer-yellow text-xs font-bold uppercase tracking-widest">Rankings</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Top Teams</h2>
          </div>
          <button className="text-soccer-green hover:text-soccer-green-light text-sm font-bold uppercase tracking-widest bg-transparent border-0 transition-colors">
            Full Table →
          </button>
        </div>

        {/* Featured top team banner */}
        <div className="bg-gradient-to-r from-soccer-green/20 to-transparent border border-soccer-green/30 rounded-2xl p-5 mb-8 flex items-center gap-4">
          <Star className="w-8 h-8 text-soccer-yellow flex-shrink-0" />
          <div>
            <div className="text-soccer-yellow text-xs font-bold uppercase tracking-widest mb-0.5">Season Leaders</div>
            <div className="text-white font-black text-lg">Manchester City lead the table with 89 points — on track for a historic treble.</div>
          </div>
        </div>

        {/* Team cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
