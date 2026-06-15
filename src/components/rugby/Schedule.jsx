import { Calendar, MapPin, Clock } from 'lucide-react';

const matches = [
  {
    id: 1,
    date: '2026-06-28',
    time: '15:00',
    home: 'AB橄榄球CD',
    away: '北京雄鹰队',
    venue: '国家体育场',
    type: '联赛',
    status: 'upcoming',
  },
  {
    id: 2,
    date: '2026-07-05',
    time: '14:30',
    home: '上海猛虎队',
    away: 'AB橄榄球CD',
    venue: '上海体育场',
    type: '联赛',
    status: 'upcoming',
  },
  {
    id: 3,
    date: '2026-07-12',
    time: '16:00',
    home: 'AB橄榄球CD',
    away: '广州战狼队',
    venue: '主场球场',
    type: '杯赛',
    status: 'upcoming',
  },
  {
    id: 4,
    date: '2026-06-15',
    time: '15:00',
    home: 'AB橄榄球CD',
    away: '深圳闪电队',
    venue: '主场球场',
    type: '联赛',
    status: 'win',
    score: '34 - 18',
  },
  {
    id: 5,
    date: '2026-06-08',
    time: '14:00',
    home: '成都熊猫队',
    away: 'AB橄榄球CD',
    venue: '成都体育中心',
    type: '联赛',
    status: 'win',
    score: '21 - 28',
  },
];

const statusConfig = {
  upcoming: { label: '即将开赛', className: 'bg-blue-500/20 text-blue-300 border border-blue-500/30' },
  win: { label: '胜利', className: 'bg-rugby-gold/20 text-rugby-gold border border-rugby-gold/30' },
  loss: { label: '失利', className: 'bg-red-500/20 text-red-300 border border-red-500/30' },
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'short' });
}

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-rugby-light">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-rugby-green/10 text-rugby-green text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            赛程安排
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rugby-dark mb-4">
            近期<span className="text-rugby-green">赛事</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            关注我们的最新赛程，为球队加油助威
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {matches.map((match) => {
            const cfg = statusConfig[match.status];
            const isHome = match.home === 'AB橄榄球CD';
            return (
              <div
                key={match.id}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4"
              >
                {/* Date */}
                <div className="flex items-center gap-3 md:w-44 shrink-0">
                  <div className="bg-rugby-green/10 rounded-xl p-2.5">
                    <Calendar className="w-5 h-5 text-rugby-green" />
                  </div>
                  <div>
                    <div className="text-rugby-dark font-semibold text-sm">{formatDate(match.date)}</div>
                    <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      {match.time}
                    </div>
                  </div>
                </div>

                {/* Match */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-bold text-base ${match.home === 'AB橄榄球CD' ? 'text-rugby-green' : 'text-gray-700'}`}>
                      {match.home}
                    </span>
                    <span className="text-gray-400 font-medium text-sm">VS</span>
                    <span className={`font-bold text-base ${match.away === 'AB橄榄球CD' ? 'text-rugby-green' : 'text-gray-700'}`}>
                      {match.away}
                    </span>
                    {match.score && (
                      <span className="ml-2 text-rugby-gold font-extrabold text-base">{match.score}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-1.5 text-gray-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    {match.venue}
                    <span className="ml-2 text-gray-300">·</span>
                    <span className="ml-1">{match.type}</span>
                  </div>
                </div>

                {/* Status */}
                <div className={`text-xs font-bold px-3 py-1.5 rounded-full shrink-0 ${cfg.className}`}>
                  {cfg.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
