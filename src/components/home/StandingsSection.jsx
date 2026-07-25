import { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const groups = {
  'A组': [
    { pos: 1, team: '荷兰', flag: '🇳🇱', played: 2, won: 2, drawn: 0, lost: 0, gd: '+4', points: 6, form: ['W', 'W'] },
    { pos: 2, team: '厄瓜多尔', flag: '🇪🇨', played: 2, won: 1, drawn: 0, lost: 1, gd: '+1', points: 3, form: ['W', 'L'] },
    { pos: 3, team: '塞内加尔', flag: '🇸🇳', played: 2, won: 1, drawn: 0, lost: 1, gd: '-1', points: 3, form: ['L', 'W'] },
    { pos: 4, team: '卡塔尔', flag: '🇶🇦', played: 2, won: 0, drawn: 0, lost: 2, gd: '-4', points: 0, form: ['L', 'L'] },
  ],
  'B组': [
    { pos: 1, team: '英格兰', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', played: 2, won: 1, drawn: 1, lost: 0, gd: '+5', points: 4, form: ['W', 'D'] },
    { pos: 2, team: '美国', flag: '🇺🇸', played: 2, won: 0, drawn: 2, lost: 0, gd: '0', points: 2, form: ['D', 'D'] },
    { pos: 3, team: '伊朗', flag: '🇮🇷', played: 2, won: 0, drawn: 1, lost: 1, gd: '-2', points: 1, form: ['L', 'D'] },
    { pos: 4, team: '威尔士', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', played: 2, won: 0, drawn: 0, lost: 2, gd: '-3', points: 0, form: ['D', 'L'] },
  ],
  'C组': [
    { pos: 1, team: '阿根廷', flag: '🇦🇷', played: 2, won: 1, drawn: 0, lost: 1, gd: '+1', points: 3, form: ['L', 'W'] },
    { pos: 2, team: '波兰', flag: '🇵🇱', played: 2, won: 1, drawn: 0, lost: 1, gd: '0', points: 3, form: ['D', 'W'] },
    { pos: 3, team: '墨西哥', flag: '🇲🇽', played: 2, won: 0, drawn: 2, lost: 0, gd: '0', points: 2, form: ['D', 'D'] },
    { pos: 4, team: '沙特阿拉伯', flag: '🇸🇦', played: 2, won: 1, drawn: 0, lost: 1, gd: '-1', points: 3, form: ['W', 'L'] },
  ],
  'D组': [
    { pos: 1, team: '法国', flag: '🇫🇷', played: 2, won: 2, drawn: 0, lost: 0, gd: '+5', points: 6, form: ['W', 'W'] },
    { pos: 2, team: '澳大利亚', flag: '🇦🇺', played: 2, won: 1, drawn: 0, lost: 1, gd: '+1', points: 3, form: ['W', 'L'] },
    { pos: 3, team: '突尼斯', flag: '🇹🇳', played: 2, won: 0, drawn: 1, lost: 1, gd: '-1', points: 1, form: ['D', 'L'] },
    { pos: 4, team: '丹麦', flag: '🇩🇰', played: 2, won: 0, drawn: 1, lost: 1, gd: '-5', points: 1, form: ['D', 'L'] },
  ],
};

const groupList = Object.keys(groups);

const formColors = {
  W: 'bg-green-500 text-white',
  D: 'bg-yellow-500 text-gray-900',
  L: 'bg-red-500 text-white',
};

export default function StandingsSection() {
  const [activeGroup, setActiveGroup] = useState('A组');
  const rows = groups[activeGroup] || [];

  return (
    <section id="standings" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">FIFA 世界杯 2026</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">小组积分榜</h2>
          </div>
          {/* Group tabs */}
          <div className="flex flex-wrap gap-1 bg-gray-950 border border-gray-800 rounded-xl p-1">
            {groupList.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGroup(g)}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all duration-150 ${
                  activeGroup === g
                    ? 'bg-yellow-500 text-gray-950'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[2rem_1fr_repeat(4,3rem)_3rem_5rem] gap-2 px-4 py-3 bg-gray-800/60 text-xs text-gray-500 uppercase tracking-wider font-bold">
            <span className="text-center">#</span>
            <span>球队</span>
            <span className="text-center">赛</span>
            <span className="text-center">胜</span>
            <span className="text-center">平</span>
            <span className="text-center">负</span>
            <span className="text-center">净</span>
            <span className="text-center font-black text-gray-300">积分</span>
          </div>

          {rows.map((row) => (
            <div
              key={row.team}
              className={`grid grid-cols-[2rem_1fr_repeat(4,3rem)_3rem_5rem] gap-2 px-4 py-3.5 items-center border-b border-gray-800/60 last:border-0 hover:bg-gray-800/30 transition-colors cursor-pointer ${
                row.pos <= 2 ? 'border-l-2 border-yellow-500' : 'border-l-2 border-transparent'
              }`}
            >
              <span className="text-center text-sm font-bold text-gray-400">{row.pos}</span>
              <span className="flex items-center gap-2 text-sm font-semibold text-white truncate">
                <span className="text-base">{row.flag}</span>
                {row.team}
              </span>
              <span className="text-center text-sm text-gray-400">{row.played}</span>
              <span className="text-center text-sm text-gray-400">{row.won}</span>
              <span className="text-center text-sm text-gray-400">{row.drawn}</span>
              <span className="text-center text-sm text-gray-400">{row.lost}</span>
              <span className={`text-center text-sm font-semibold ${row.gd.startsWith('+') ? 'text-green-400' : row.gd === '0' ? 'text-gray-400' : 'text-red-400'}`}>
                {row.gd}
              </span>
              <div className="flex items-center justify-center gap-1">
                <span className="text-sm font-black text-white mr-1">{row.points}</span>
                {row.form.map((f, fi) => (
                  <span key={fi} className={`w-4 h-4 rounded-sm text-[9px] font-black flex items-center justify-center ${formColors[f]}`}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-yellow-500" />
            <span className="text-xs text-gray-500">晋级淘汰赛</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>每组前2名晋级</span>
          </div>
        </div>
      </div>
    </section>
  );
}
