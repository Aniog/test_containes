const events = [
  {
    name: '世界大赛',
    nameEn: 'World Series',
    icon: '🏆',
    when: '每年10月',
    desc: 'MLB赛季的最高荣誉，美联和国联冠军队伍争夺年度总冠军，是北美最受关注的体育赛事之一。',
    highlight: true,
  },
  {
    name: '全明星赛',
    nameEn: 'MLB All-Star Game',
    icon: '⭐',
    when: '每年7月',
    desc: '汇聚全联盟最优秀球员的年度盛典，球迷投票选出梦之队，展示棒球运动的最高水准。',
    highlight: false,
  },
  {
    name: '全垒打大赛',
    nameEn: 'Home Run Derby',
    icon: '💥',
    when: '全明星周',
    desc: '全明星赛前夜举行的全垒打竞技，球员们展示惊人的击球力量，是最受球迷欢迎的表演赛事。',
    highlight: false,
  },
  {
    name: '世界棒球经典赛',
    nameEn: 'World Baseball Classic',
    icon: '🌍',
    when: '每4年一届',
    desc: '国际棒球最高水准的赛事，各国国家队同台竞技，日本、美国、多米尼加等强队争夺世界冠军。',
    highlight: false,
  },
  {
    name: '春训',
    nameEn: 'Spring Training',
    icon: '🌸',
    when: '每年2-3月',
    desc: '新赛季开始前的热身训练期，球队在佛罗里达或亚利桑那进行训练和热身赛，为正式赛季做准备。',
    highlight: false,
  },
  {
    name: '季后赛',
    nameEn: 'MLB Playoffs',
    icon: '🔥',
    when: '每年10月',
    desc: '常规赛结束后，各分区冠军和外卡队伍进行淘汰赛，最终决出美联和国联冠军，晋级世界大赛。',
    highlight: false,
  },
];

const Events = () => {
  return (
    <section id="events" className="bg-slate-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">重要赛事</p>
          <h2
            className="font-black text-4xl md:text-5xl text-white uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            棒球年历
          </h2>
          <p className="text-slate-400 text-base mt-4 max-w-xl mx-auto">
            棒球赛季精彩纷呈，这些重要赛事让球迷全年都有期待
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.name}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                event.highlight
                  ? 'bg-gradient-to-br from-red-900/40 to-slate-800 border-red-600/50 shadow-lg shadow-red-900/20'
                  : 'bg-slate-800 border-slate-700 hover:border-red-600/40'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{event.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3
                      className="font-bold text-lg text-white"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {event.name}
                    </h3>
                    {event.highlight && (
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        年度最高
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs mb-2">{event.nameEn}</p>
                  <div className="inline-flex items-center gap-1 bg-slate-700/50 rounded-full px-3 py-1 mb-3">
                    <span className="text-amber-400 text-xs">📅</span>
                    <span className="text-slate-300 text-xs font-medium">{event.when}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
