import { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

const matches = [
  { id: 1, date: '2026-06-11', time: '20:00', home: '🇲🇽 墨西哥', away: '🇺🇸 美国', venue: '阿兹特克球场', city: '墨西哥城', group: 'A', status: 'upcoming' },
  { id: 2, date: '2026-06-12', time: '18:00', home: '🇧🇷 巴西', away: '🇦🇷 阿根廷', venue: '大都会球场', city: '纽约', group: 'B', status: 'upcoming' },
  { id: 3, date: '2026-06-13', time: '21:00', home: '🇫🇷 法国', away: '🇩🇪 德国', venue: '玫瑰碗球场', city: '洛杉矶', group: 'C', status: 'upcoming' },
  { id: 4, date: '2026-06-14', time: '19:00', home: '🇪🇸 西班牙', away: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 英格兰', venue: '达拉斯球场', city: '达拉斯', group: 'D', status: 'upcoming' },
  { id: 5, date: '2026-06-15', time: '20:00', home: '🇵🇹 葡萄牙', away: '🇳🇱 荷兰', venue: '温哥华BC球场', city: '温哥华', group: 'E', status: 'upcoming' },
  { id: 6, date: '2026-06-16', time: '18:00', home: '🇯🇵 日本', away: '🇰🇷 韩国', venue: '旧金山球场', city: '旧金山', group: 'F', status: 'upcoming' },
  { id: 7, date: '2026-06-17', time: '21:00', home: '🇮🇹 意大利', away: '🇧🇪 比利时', venue: '迈阿密球场', city: '迈阿密', group: 'G', status: 'upcoming' },
  { id: 8, date: '2026-06-18', time: '19:00', home: '🇨🇦 加拿大', away: '🇲🇦 摩洛哥', venue: '多伦多球场', city: '多伦多', group: 'H', status: 'upcoming' },
];

const statusConfig = {
  upcoming: { label: '即将开始', className: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  live: { label: '进行中', className: 'bg-green-500/20 text-green-400 border-green-500/30 animate-pulse' },
  finished: { label: '已结束', className: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
};

export default function ScheduleSection() {
  const [activeGroup, setActiveGroup] = useState('全部');

  const filtered = activeGroup === '全部' ? matches : matches.filter((m) => m.group === activeGroup);

  return (
    <section id="schedule" className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">赛程安排</span>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white mt-2 tracking-wide">
            小组赛赛程
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            2026年6月11日至7月19日，横跨美国、加拿大、墨西哥三国16座城市
          </p>
        </div>

        {/* Group Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {['全部', ...groups].map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                activeGroup === g
                  ? 'bg-[#C8102E] text-white shadow-[0_0_15px_rgba(200,16,46,0.4)]'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              {g === '全部' ? g : `组${g}`}
            </button>
          ))}
        </div>

        {/* Match Cards */}
        <div className="grid gap-4">
          {filtered.map((match) => {
            const status = statusConfig[match.status];
            return (
              <div
                key={match.id}
                className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-gray-500 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Date/Time */}
                  <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 sm:w-32 shrink-0">
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{match.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#FFD700] text-sm font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{match.time}</span>
                    </div>
                  </div>

                  {/* Teams */}
                  <div className="flex-1 flex items-center justify-center gap-4">
                    <span className="text-white font-bold text-base sm:text-lg text-right flex-1">{match.home}</span>
                    <div className="bg-gray-700 rounded-lg px-3 py-1.5 shrink-0">
                      <span className="font-['Bebas_Neue'] text-[#FFD700] text-xl tracking-widest">VS</span>
                    </div>
                    <span className="text-white font-bold text-base sm:text-lg text-left flex-1">{match.away}</span>
                  </div>

                  {/* Venue + Status */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 sm:w-40 shrink-0">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{match.city}</span>
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${status.className}`}>
                      {status.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-bold py-3 px-10 rounded-full uppercase tracking-widest transition-all duration-200 text-sm">
            查看完整赛程
          </button>
        </div>
      </div>
    </section>
  );
}
