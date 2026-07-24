import { Target } from 'lucide-react';

const scorers = [
  { rank: 1, name: 'Erling Haaland', team: 'Manchester City', nationality: '🇳🇴', goals: 32, assists: 8, apps: 34, imgId: 'scorer-haaland-a1b2c3', titleId: 'scorer-1-name', teamId: 'scorer-1-team' },
  { rank: 2, name: 'Mohamed Salah', team: 'Liverpool', nationality: '🇪🇬', goals: 28, assists: 14, apps: 34, imgId: 'scorer-salah-d4e5f6', titleId: 'scorer-2-name', teamId: 'scorer-2-team' },
  { rank: 3, name: 'Cole Palmer', team: 'Chelsea', nationality: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', goals: 24, assists: 11, apps: 33, imgId: 'scorer-palmer-g7h8i9', titleId: 'scorer-3-name', teamId: 'scorer-3-team' },
  { rank: 4, name: 'Ollie Watkins', team: 'Aston Villa', nationality: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', goals: 21, assists: 9, apps: 32, imgId: 'scorer-watkins-j1k2l3', titleId: 'scorer-4-name', teamId: 'scorer-4-team' },
  { rank: 5, name: 'Alexander Isak', team: 'Newcastle', nationality: '🇸🇪', goals: 19, assists: 5, apps: 30, imgId: 'scorer-isak-m4n5o6', titleId: 'scorer-5-name', teamId: 'scorer-5-team' },
];

const maxGoals = scorers[0].goals;

export default function TopScorersSection() {
  return (
    <section id="scorers" className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title */}
          <div>
            <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2">2025/26 Season</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Top Scorers</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              The deadliest strikers in the Premier League this season. Track goals, assists, and appearances.
            </p>

            {/* Top scorer highlight */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-green-500" />
                <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Golden Boot Leader</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-black text-white">{scorers[0].name}</div>
                  <div className="text-sm text-gray-400 mt-1">{scorers[0].team} · {scorers[0].nationality}</div>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-black text-green-500">{scorers[0].goals}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Goals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scorers list */}
          <div className="flex flex-col gap-3">
            {scorers.map((scorer) => (
              <div
                key={scorer.rank}
                className="bg-gray-900 border border-gray-800 hover:border-green-500/40 rounded-xl p-4 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <span className={`text-lg font-black w-6 text-center ${scorer.rank === 1 ? 'text-yellow-400' : 'text-gray-600'}`}>
                    {scorer.rank}
                  </span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-green-400 transition-colors truncate">
                        {scorer.name}
                      </span>
                      <span className="text-base">{scorer.nationality}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{scorer.team}</div>

                    {/* Progress bar */}
                    <div className="mt-2 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${(scorer.goals / maxGoals) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-right shrink-0">
                    <div>
                      <div className="text-xl font-black text-white">{scorer.goals}</div>
                      <div className="text-[10px] text-gray-600 uppercase tracking-wider">Goals</div>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-bold text-gray-400">{scorer.assists}</div>
                      <div className="text-[10px] text-gray-600 uppercase tracking-wider">Assists</div>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-bold text-gray-400">{scorer.apps}</div>
                      <div className="text-[10px] text-gray-600 uppercase tracking-wider">Apps</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
