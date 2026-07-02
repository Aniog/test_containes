import { knockoutBracket } from '@/data/worldcup';
import { Trophy } from 'lucide-react';

const MatchSlot = ({ match, size = 'sm' }) => {
  const hasScore = match.homeScore !== null;
  return (
    <div className="bg-wc-card border border-wc-border rounded-lg overflow-hidden hover:border-wc-gold/40 transition-colors">
      {/* Home */}
      <div className={`flex items-center justify-between px-3 py-2 border-b border-wc-border/50 ${
        hasScore && match.homeScore > match.awayScore ? 'bg-wc-gold/10' : ''
      }`}>
        <div className="flex items-center gap-2">
          <span className="text-base">{match.home.flag}</span>
          <span className={`text-xs font-medium ${size === 'lg' ? 'text-sm' : ''} ${
            hasScore && match.homeScore > match.awayScore ? 'text-white font-bold' : 'text-gray-300'
          }`}>
            {match.home.name}
          </span>
        </div>
        <span className={`font-black text-sm ${
          hasScore && match.homeScore > match.awayScore ? 'text-wc-gold' : 'text-gray-400'
        }`}>
          {match.homeScore ?? '-'}
        </span>
      </div>
      {/* Away */}
      <div className={`flex items-center justify-between px-3 py-2 ${
        hasScore && match.awayScore > match.homeScore ? 'bg-wc-gold/10' : ''
      }`}>
        <div className="flex items-center gap-2">
          <span className="text-base">{match.away.flag}</span>
          <span className={`text-xs font-medium ${size === 'lg' ? 'text-sm' : ''} ${
            hasScore && match.awayScore > match.homeScore ? 'text-white font-bold' : 'text-gray-300'
          }`}>
            {match.away.name}
          </span>
        </div>
        <span className={`font-black text-sm ${
          hasScore && match.awayScore > match.homeScore ? 'text-wc-gold' : 'text-gray-400'
        }`}>
          {match.awayScore ?? '-'}
        </span>
      </div>
      {/* Date */}
      <div className="px-3 py-1 bg-wc-surface/50 text-xs text-gray-500 text-center">
        {match.date}
      </div>
    </div>
  );
};

const Bracket = () => {
  return (
    <section id="bracket" className="py-20 bg-wc-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-wc-gold mb-2">淘汰赛阶段</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">对阵图</h2>
          <p className="text-gray-400 mt-2 text-sm">从16强到决赛，追踪每一场关键对决</p>
        </div>

        {/* Bracket Layout */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-4 gap-4">
              {/* Round of 16 */}
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 text-center">
                  16强
                </h3>
                <div className="space-y-3">
                  {knockoutBracket.roundOf16.map((match, i) => (
                    <MatchSlot key={i} match={match} />
                  ))}
                </div>
              </div>

              {/* Quarter Finals */}
              <div className="flex flex-col justify-around">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 text-center">
                  8强
                </h3>
                <div className="space-y-6 flex-1 flex flex-col justify-around">
                  {knockoutBracket.quarterFinals.map((match, i) => (
                    <MatchSlot key={i} match={match} />
                  ))}
                </div>
              </div>

              {/* Semi Finals */}
              <div className="flex flex-col justify-around">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 text-center">
                  4强
                </h3>
                <div className="space-y-6 flex-1 flex flex-col justify-around">
                  {knockoutBracket.semiFinals.map((match, i) => (
                    <MatchSlot key={i} match={match} />
                  ))}
                </div>
              </div>

              {/* Final */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xs font-bold tracking-widest uppercase text-wc-gold mb-4 text-center">
                  决赛
                </h3>
                <div className="relative">
                  <div className="absolute -inset-2 bg-wc-gold/10 rounded-xl border border-wc-gold/30" />
                  <div className="relative">
                    <div className="flex justify-center mb-3">
                      <Trophy className="w-6 h-6 text-wc-gold" />
                    </div>
                    <MatchSlot match={knockoutBracket.final} size="lg" />
                    <p className="text-center text-xs text-gray-500 mt-2">
                      2026年7月19日 · 纽约
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bracket;
