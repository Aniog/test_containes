import { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const scheduleData = [
  {
    phase: '小组赛',
    dates: '2026年6月11日 — 7月2日',
    color: 'bg-blue-500',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    matches: [
      { date: '6月11日', time: '18:00', match: '揭幕战', venue: '阿兹特克球场，墨西哥城', flag1: '🇲🇽', flag2: '⚽' },
      { date: '6月12日', time: '多场', match: '小组赛第1轮', venue: '多城市同步进行', flag1: '⚽', flag2: '⚽' },
      { date: '6月16日', time: '多场', match: '小组赛第2轮', venue: '多城市同步进行', flag1: '⚽', flag2: '⚽' },
      { date: '6月26日', time: '多场', match: '小组赛第3轮', venue: '多城市同步进行', flag1: '⚽', flag2: '⚽' },
    ],
  },
  {
    phase: '淘汰赛',
    dates: '2026年7月3日 — 7月12日',
    color: 'bg-amber-500',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    matches: [
      { date: '7月3日—6日', time: '多场', match: '32强淘汰赛', venue: '多城市', flag1: '⚽', flag2: '⚽' },
      { date: '7月7日—10日', time: '多场', match: '16强淘汰赛', venue: '多城市', flag1: '⚽', flag2: '⚽' },
      { date: '7月11日—12日', time: '多场', match: '八强淘汰赛', venue: '多城市', flag1: '⚽', flag2: '⚽' },
    ],
  },
  {
    phase: '半决赛 & 决赛',
    dates: '2026年7月14日 — 7月19日',
    color: 'bg-red-500',
    textColor: 'text-red-400',
    borderColor: 'border-red-500/30',
    matches: [
      { date: '7月14日', time: '21:00', match: '半决赛 第一场', venue: '大都会人寿球场，纽约', flag1: '⚽', flag2: '⚽' },
      { date: '7月15日', time: '21:00', match: '半决赛 第二场', venue: 'AT&T球场，达拉斯', flag1: '⚽', flag2: '⚽' },
      { date: '7月18日', time: '18:00', match: '季军赛', venue: '迈阿密硬石球场', flag1: '⚽', flag2: '⚽' },
      { date: '7月19日', time: '18:00', match: '🏆 世界杯决赛', venue: '大都会人寿球场，纽约/新泽西', flag1: '⚽', flag2: '⚽' },
    ],
  },
];

export default function Schedule() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="schedule" className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            赛程安排
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            赛事<span className="text-amber-400">赛程表</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从揭幕战到决赛，39天的足球盛宴，每一场都值得期待。
          </p>
        </div>

        {/* Phase tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {scheduleData.map((phase, i) => (
            <button
              key={phase.phase}
              onClick={() => setActivePhase(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                activePhase === i
                  ? `${phase.color} text-white`
                  : 'bg-white/5 text-slate-300 border border-gray-700 hover:border-amber-400/50'
              }`}
            >
              {phase.phase}
            </button>
          ))}
        </div>

        {/* Schedule content */}
        {scheduleData.map((phase, i) => (
          <div key={phase.phase} className={activePhase === i ? 'block' : 'hidden'}>
            <div className={`bg-[#1a2035] border ${phase.borderColor} rounded-2xl overflow-hidden`}>
              {/* Phase header */}
              <div className={`${phase.color} px-6 py-4 flex items-center gap-3`}>
                <Calendar className="w-5 h-5 text-white" />
                <div>
                  <h3 className="text-white font-bold text-lg">{phase.phase}</h3>
                  <p className="text-white/80 text-sm">{phase.dates}</p>
                </div>
              </div>

              {/* Matches */}
              <div className="divide-y divide-gray-700/50">
                {phase.matches.map((match, j) => (
                  <div key={j} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-white/5 transition-colors">
                    {/* Date & Time */}
                    <div className="flex items-center gap-4 sm:w-48 flex-shrink-0">
                      <div className="text-center">
                        <p className={`${phase.textColor} font-bold text-sm`}>{match.date}</p>
                        <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
                          <Clock className="w-3 h-3" />
                          <span>{match.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Match info */}
                    <div className="flex-1">
                      <p className="text-white font-semibold text-base">{match.match}</p>
                      <div className="flex items-center gap-1 text-slate-400 text-sm mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{match.venue}</span>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="flex-shrink-0">
                      <span className="bg-white/5 border border-gray-700 text-slate-400 text-xs px-3 py-1 rounded-full">
                        待定
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Note */}
        <p className="text-center text-slate-500 text-sm mt-6">
          * 具体比赛时间及对阵球队将在赛事开始后公布，以上为预计安排
        </p>
      </div>
    </section>
  );
}
