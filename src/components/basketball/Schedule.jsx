const games = [
  {
    id: 1,
    date: '6月18日',
    day: '周三',
    time: '19:30',
    home: { name: '雷霆队', abbr: 'SLM', isUs: true },
    away: { name: '猛龙队', abbr: 'DRG' },
    venue: '主场 · 星火体育馆',
    status: 'upcoming',
    ticketsLeft: 342,
  },
  {
    id: 2,
    date: '6月22日',
    day: '周日',
    time: '20:00',
    home: { name: '飞鹰队', abbr: 'EGL' },
    away: { name: '雷霆队', abbr: 'SLM', isUs: true },
    venue: '客场 · 鹰巢体育馆',
    status: 'upcoming',
    ticketsLeft: null,
  },
  {
    id: 3,
    date: '6月27日',
    day: '周五',
    time: '19:00',
    home: { name: '雷霆队', abbr: 'SLM', isUs: true },
    away: { name: '狼群队', abbr: 'WLF' },
    venue: '主场 · 星火体育馆',
    status: 'upcoming',
    ticketsLeft: 1200,
  },
  {
    id: 4,
    date: '7月3日',
    day: '周四',
    time: '20:30',
    home: { name: '雷霆队', abbr: 'SLM', isUs: true },
    away: { name: '骑士队', abbr: 'KNT' },
    venue: '主场 · 星火体育馆',
    status: 'upcoming',
    ticketsLeft: 2800,
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-court-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-hoop-orange text-xs font-body font-semibold uppercase tracking-[0.3em] mb-3">
              近期比赛
            </p>
            <h2 className="font-heading font-black text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              赛程安排
            </h2>
          </div>
          <a
            href="#"
            className="text-gray-400 hover:text-hoop-orange font-body text-sm font-medium uppercase tracking-wider transition-colors duration-200 self-start md:self-auto"
          >
            完整赛程 →
          </a>
        </div>

        {/* Games List */}
        <div className="flex flex-col gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="group bg-court-card rounded-2xl border border-court-border hover:border-hoop-orange/40 p-5 md:p-6 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {/* Date */}
                <div className="flex-shrink-0 w-20 text-center hidden md:block">
                  <p className="font-heading font-black text-hoop-orange text-2xl leading-none">{game.date}</p>
                  <p className="text-gray-500 text-xs font-body uppercase tracking-wider mt-1">{game.day}</p>
                </div>

                {/* Mobile Date */}
                <div className="flex items-center gap-3 md:hidden">
                  <span className="text-hoop-orange font-heading font-bold text-lg">{game.date}</span>
                  <span className="text-gray-500 text-sm font-body">{game.day} · {game.time}</span>
                </div>

                {/* Matchup */}
                <div className="flex-1 flex items-center gap-4 md:gap-8">
                  {/* Home Team */}
                  <div className={`flex items-center gap-3 flex-1 justify-end ${game.home.isUs ? '' : ''}`}>
                    <span className={`font-heading font-bold text-lg md:text-xl uppercase ${game.home.isUs ? 'text-white' : 'text-gray-400'}`}>
                      {game.home.name}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-heading font-black ${game.home.isUs ? 'bg-hoop-orange text-white' : 'bg-court-border text-gray-400'}`}>
                      {game.home.abbr.slice(0, 2)}
                    </div>
                  </div>

                  {/* VS */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="text-gray-600 font-heading font-bold text-sm uppercase">VS</span>
                    <span className="text-gray-500 text-xs font-body hidden md:block mt-0.5">{game.time}</span>
                  </div>

                  {/* Away Team */}
                  <div className={`flex items-center gap-3 flex-1 ${game.away.isUs ? '' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-heading font-black ${game.away.isUs ? 'bg-hoop-orange text-white' : 'bg-court-border text-gray-400'}`}>
                      {game.away.abbr.slice(0, 2)}
                    </div>
                    <span className={`font-heading font-bold text-lg md:text-xl uppercase ${game.away.isUs ? 'text-white' : 'text-gray-400'}`}>
                      {game.away.name}
                    </span>
                  </div>
                </div>

                {/* Venue & Ticket */}
                <div className="flex-shrink-0 flex flex-col md:items-end gap-1.5">
                  <p className="text-gray-500 text-xs font-body">{game.venue}</p>
                  {game.ticketsLeft !== null ? (
                    <a
                      href="#"
                      className="inline-block bg-hoop-orange hover:bg-hoop-orange-dark text-white text-xs font-body font-bold px-4 py-1.5 rounded-full uppercase tracking-wide transition-colors duration-200"
                    >
                      购票 · 余{game.ticketsLeft}张
                    </a>
                  ) : (
                    <span className="text-gray-600 text-xs font-body uppercase tracking-wide">客场比赛</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
