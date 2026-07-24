import { TrendingUp } from 'lucide-react';

const standings = [
  { pos: 1, team: 'Manchester City', played: 34, won: 26, drawn: 5, lost: 3, gd: '+52', points: 83, form: ['W', 'W', 'W', 'D', 'W'], zone: 'champions' },
  { pos: 2, team: 'Arsenal', played: 34, won: 24, drawn: 6, lost: 4, gd: '+44', points: 78, form: ['W', 'W', 'D', 'W', 'W'], zone: 'champions' },
  { pos: 3, team: 'Liverpool', played: 34, won: 23, drawn: 7, lost: 4, gd: '+41', points: 76, form: ['D', 'W', 'W', 'W', 'L'], zone: 'champions' },
  { pos: 4, team: 'Aston Villa', played: 34, won: 20, drawn: 6, lost: 8, gd: '+22', points: 66, form: ['W', 'L', 'W', 'W', 'D'], zone: 'champions' },
  { pos: 5, team: 'Tottenham', played: 34, won: 17, drawn: 5, lost: 12, gd: '+11', points: 56, form: ['L', 'W', 'D', 'W', 'W'], zone: 'europa' },
  { pos: 6, team: 'Chelsea', played: 34, won: 15, drawn: 9, lost: 10, gd: '+8', points: 54, form: ['D', 'D', 'W', 'L', 'W'], zone: 'europa' },
  { pos: 7, team: 'Newcastle', played: 34, won: 15, drawn: 7, lost: 12, gd: '+9', points: 52, form: ['W', 'W', 'L', 'D', 'W'], zone: 'none' },
  { pos: 8, team: 'Manchester Utd', played: 34, won: 13, drawn: 8, lost: 13, gd: '-3', points: 47, form: ['L', 'D', 'W', 'L', 'D'], zone: 'none' },
];

const formColors = {
  W: 'bg-green-500 text-white',
  D: 'bg-yellow-500 text-gray-900',
  L: 'bg-red-500 text-white',
};

const zoneColors = {
  champions: 'border-l-2 border-blue-500',
  europa: 'border-l-2 border-orange-500',
  none: 'border-l-2 border-transparent',
};

const zoneLabels = [
  { color: 'bg-blue-500', label: 'Champions League' },
  { color: 'bg-orange-500', label: 'Europa League' },
];

export default function StandingsSection() {
  return (
    <section id="standings" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2">2025/26 Season</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Premier League Table</h2>
          </div>
          <div className="flex items-center gap-4">
            {zoneLabels.map((z) => (
              <div key={z.label} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-sm ${z.color}`} />
                <span className="text-xs text-gray-500">{z.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[2rem_1fr_repeat(5,3rem)_4rem_5rem] gap-2 px-4 py-3 bg-gray-800/60 text-xs text-gray-500 uppercase tracking-wider font-bold">
            <span className="text-center">#</span>
            <span>Club</span>
            <span className="text-center">P</span>
            <span className="text-center">W</span>
            <span className="text-center">D</span>
            <span className="text-center">L</span>
            <span className="text-center">GD</span>
            <span className="text-center font-black text-gray-300">Pts</span>
            <span className="text-center hidden md:block">Form</span>
          </div>

          {/* Rows */}
          {standings.map((row, i) => (
            <div
              key={row.team}
              className={`grid grid-cols-[2rem_1fr_repeat(5,3rem)_4rem_5rem] gap-2 px-4 py-3.5 items-center border-b border-gray-800/60 last:border-0 hover:bg-gray-800/30 transition-colors cursor-pointer ${zoneColors[row.zone]}`}
            >
              <span className="text-center text-sm font-bold text-gray-400">{row.pos}</span>
              <span className="text-sm font-semibold text-white truncate">{row.team}</span>
              <span className="text-center text-sm text-gray-400">{row.played}</span>
              <span className="text-center text-sm text-gray-400">{row.won}</span>
              <span className="text-center text-sm text-gray-400">{row.drawn}</span>
              <span className="text-center text-sm text-gray-400">{row.lost}</span>
              <span className={`text-center text-sm font-semibold ${row.gd.startsWith('+') ? 'text-green-400' : row.gd === '0' ? 'text-gray-400' : 'text-red-400'}`}>
                {row.gd}
              </span>
              <span className="text-center text-sm font-black text-white">{row.points}</span>
              <div className="hidden md:flex items-center justify-center gap-0.5">
                {row.form.map((f, fi) => (
                  <span
                    key={fi}
                    className={`w-5 h-5 rounded-sm text-[10px] font-black flex items-center justify-center ${formColors[f]}`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>4 matches remaining</span>
        </div>
      </div>
    </section>
  );
}
