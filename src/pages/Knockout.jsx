import { knockoutRounds } from '@/data/worldcup';
import { Swords } from 'lucide-react';

const KnockoutMatch = ({ match, size = 'normal' }) => {
  const isFinished = match.status === 'finished';
  const isTBD = match.home.name === 'TBD';

  return (
    <div className={`bg-[#1C2E45] border rounded-xl overflow-hidden transition-colors ${
      isTBD ? 'border-[#2D4A6B] opacity-60' : 'border-[#2D4A6B] hover:border-amber-400/40'
    }`}>
      {/* Home */}
      <div className={`flex items-center justify-between px-4 py-3 border-b border-[#2D4A6B] ${
        isFinished && match.homeScore > match.awayScore ? 'bg-amber-400/10' : ''
      }`}>
        <div className="flex items-center gap-2">
          <span className="text-xl">{match.home.flag}</span>
          <span className={`font-bold text-sm ${isTBD ? 'text-slate-500' : 'text-white'}`}>
            {match.home.name}
          </span>
        </div>
        {isFinished && (
          <span className={`font-black text-lg ${
            match.homeScore > match.awayScore ? 'text-amber-400' : 'text-slate-400'
          }`}>
            {match.homeScore}
          </span>
        )}
      </div>

      {/* Away */}
      <div className={`flex items-center justify-between px-4 py-3 ${
        isFinished && match.awayScore > match.homeScore ? 'bg-amber-400/10' : ''
      }`}>
        <div className="flex items-center gap-2">
          <span className="text-xl">{match.away.flag}</span>
          <span className={`font-bold text-sm ${isTBD ? 'text-slate-500' : 'text-white'}`}>
            {match.away.name}
          </span>
        </div>
        {isFinished && (
          <span className={`font-black text-lg ${
            match.awayScore > match.homeScore ? 'text-amber-400' : 'text-slate-400'
          }`}>
            {match.awayScore}
          </span>
        )}
      </div>

      {/* Date */}
      {!isFinished && !isTBD && (
        <div className="px-4 py-2 bg-[#243B55] text-center">
          <span className="text-amber-400 text-xs font-semibold">{match.date}</span>
        </div>
      )}
    </div>
  );
};

const RoundSection = ({ title, matches, highlight = false }) => (
  <div className={`${highlight ? 'col-span-full' : ''}`}>
    <h3 className={`text-center font-black uppercase tracking-widest mb-4 ${
      highlight ? 'text-2xl text-amber-400' : 'text-sm text-slate-400'
    }`}>
      {title}
    </h3>
    <div className={`flex flex-col gap-3 ${highlight ? 'max-w-sm mx-auto' : ''}`}>
      {matches.map((m) => <KnockoutMatch key={m.id} match={m} />)}
    </div>
  </div>
);

const Knockout = () => (
  <div className="bg-[#0D1B2A] min-h-screen pt-20">
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <Swords className="w-7 h-7 text-amber-400" />
          <h1 className="text-4xl font-black text-white uppercase tracking-wide">淘汰赛阶段</h1>
        </div>
        <p className="text-slate-400">从16强到决赛的对阵图</p>
      </div>

      {/* Bracket */}
      <div className="space-y-12">
        {/* Round of 16 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#2D4A6B]" />
            <span className="text-slate-300 font-black uppercase tracking-widest text-sm px-4">16强赛</span>
            <div className="h-px flex-1 bg-[#2D4A6B]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {knockoutRounds.roundOf16.map((m) => <KnockoutMatch key={m.id} match={m} />)}
          </div>
        </div>

        {/* Quarter Finals */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#2D4A6B]" />
            <span className="text-slate-300 font-black uppercase tracking-widest text-sm px-4">四分之一决赛</span>
            <div className="h-px flex-1 bg-[#2D4A6B]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {knockoutRounds.quarterFinals.map((m) => <KnockoutMatch key={m.id} match={m} />)}
          </div>
        </div>

        {/* Semi Finals */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#2D4A6B]" />
            <span className="text-slate-300 font-black uppercase tracking-widest text-sm px-4">半决赛</span>
            <div className="h-px flex-1 bg-[#2D4A6B]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {knockoutRounds.semiFinals.map((m) => <KnockoutMatch key={m.id} match={m} />)}
          </div>
        </div>

        {/* Final */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-amber-400/30" />
            <span className="text-amber-400 font-black uppercase tracking-widest text-lg px-4 flex items-center gap-2">
              🏆 决赛
            </span>
            <div className="h-px flex-1 bg-amber-400/30" />
          </div>
          <div className="max-w-sm mx-auto">
            {knockoutRounds.final.map((m) => (
              <div key={m.id} className="border-2 border-amber-400/50 rounded-xl overflow-hidden shadow-lg shadow-amber-400/10">
                <KnockoutMatch match={m} />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-4">
            2026年7月19日 · 大都会体育场 · 纽约/新泽西
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Knockout;
