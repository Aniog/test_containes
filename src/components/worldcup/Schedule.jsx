import { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const groups = ['全部', '小组赛', '淘汰赛', '决赛'];

const matches = [
  {
    id: 1,
    stage: '小组赛',
    group: 'A组',
    date: '2026-06-11',
    time: '20:00',
    venue: '洛杉矶 SoFi体育场',
    home: { name: '美国', flag: '🇺🇸', score: null },
    away: { name: '墨西哥', flag: '🇲🇽', score: null },
    status: '即将开始',
  },
  {
    id: 2,
    stage: '小组赛',
    group: 'B组',
    date: '2026-06-12',
    time: '18:00',
    venue: '纽约 大都会球场',
    home: { name: '巴西', flag: '🇧🇷', score: null },
    away: { name: '阿根廷', flag: '🇦🇷', score: null },
    status: '即将开始',
  },
  {
    id: 3,
    stage: '小组赛',
    group: 'C组',
    date: '2026-06-13',
    time: '21:00',
    venue: '达拉斯 AT&T体育场',
    home: { name: '法国', flag: '🇫🇷', score: null },
    away: { name: '德国', flag: '🇩🇪', score: null },
    status: '即将开始',
  },
  {
    id: 4,
    stage: '小组赛',
    group: 'D组',
    date: '2026-06-14',
    time: '19:00',
    venue: '多伦多 BMO球场',
    home: { name: '英格兰', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: null },
    away: { name: '西班牙', flag: '🇪🇸', score: null },
    status: '即将开始',
  },
  {
    id: 5,
    stage: '小组赛',
    group: 'E组',
    date: '2026-06-15',
    time: '20:00',
    venue: '迈阿密 硬石体育场',
    home: { name: '葡萄牙', flag: '🇵🇹', score: null },
    away: { name: '荷兰', flag: '🇳🇱', score: null },
    status: '即将开始',
  },
  {
    id: 6,
    stage: '小组赛',
    group: 'F组',
    date: '2026-06-16',
    time: '22:00',
    venue: '墨西哥城 阿兹特克球场',
    home: { name: '日本', flag: '🇯🇵', score: null },
    away: { name: '韩国', flag: '🇰🇷', score: null },
    status: '即将开始',
  },
  {
    id: 7,
    stage: '淘汰赛',
    group: '16强',
    date: '2026-07-01',
    time: '20:00',
    venue: '洛杉矶 SoFi体育场',
    home: { name: 'A组第1', flag: '🏆', score: null },
    away: { name: 'B组第2', flag: '🏆', score: null },
    status: '待定',
  },
  {
    id: 8,
    stage: '决赛',
    group: '总决赛',
    date: '2026-07-19',
    time: '20:00',
    venue: '纽约 大都会球场',
    home: { name: '待定', flag: '🏆', score: null },
    away: { name: '待定', flag: '🏆', score: null },
    status: '待定',
  },
];

const statusColor = {
  '即将开始': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  '进行中': 'bg-[#2dc653]/20 text-[#2dc653] border-[#2dc653]/30',
  '已结束': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  '待定': 'bg-gray-600/20 text-gray-500 border-gray-600/30',
};

export default function Schedule() {
  const [activeFilter, setActiveFilter] = useState('全部');

  const filtered = activeFilter === '全部'
    ? matches
    : matches.filter((m) => m.stage === activeFilter);

  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[#f5c518] text-sm font-semibold tracking-widest uppercase">赛程安排</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">精彩赛程</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">2026年FIFA世界杯赛程一览，不错过每一场精彩对决</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActiveFilter(g)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === g
                  ? 'bg-[#f5c518] text-[#0a0e1a]'
                  : 'bg-[#1a2235] text-gray-300 hover:bg-[#1a2235]/80 border border-gray-700/50'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Match cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((match) => (
            <div
              key={match.id}
              className="bg-[#1a2235] border border-gray-700/50 hover:border-[#f5c518]/40 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-[#f5c518]/5"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#f5c518] bg-[#f5c518]/10 border border-[#f5c518]/20 px-2 py-0.5 rounded-full">
                    {match.group}
                  </span>
                  <span className={`text-xs font-semibold border px-2 py-0.5 rounded-full ${statusColor[match.status]}`}>
                    {match.status}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{match.stage}</span>
              </div>

              {/* Teams */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 text-center">
                  <div className="text-3xl mb-1">{match.home.flag}</div>
                  <div className="text-white font-bold text-sm md:text-base">{match.home.name}</div>
                </div>

                <div className="text-center px-4">
                  {match.home.score !== null ? (
                    <div className="text-2xl font-black text-white">
                      {match.home.score} <span className="text-gray-500">:</span> {match.away.score}
                    </div>
                  ) : (
                    <div className="text-xl font-black text-gray-500">VS</div>
                  )}
                </div>

                <div className="flex-1 text-center">
                  <div className="text-3xl mb-1">{match.away.flag}</div>
                  <div className="text-white font-bold text-sm md:text-base">{match.away.name}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-700/50 flex flex-wrap gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {match.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {match.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {match.venue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
