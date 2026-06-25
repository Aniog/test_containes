const rules = [
  {
    icon: '⚾',
    title: '基本目标',
    desc: '两队各9名球员，进攻方击球后跑垒得分，防守方设法让进攻方出局。得分最多的队伍获胜。',
  },
  {
    icon: '🏟️',
    title: '比赛场地',
    desc: '棒球场呈扇形，内野有四个垒包组成菱形，本垒板到一垒、三垒各90英尺，外野延伸至围栏。',
  },
  {
    icon: '🔄',
    title: '局数制度',
    desc: '正式比赛共9局，每局分上下半局。上半局客队进攻，下半局主队进攻。每半局三出局后攻守交换。',
  },
  {
    icon: '🏃',
    title: '跑垒得分',
    desc: '击球员击球后依序经过一垒、二垒、三垒，最终回到本垒即得1分。全垒打可让所有垒上球员得分。',
  },
  {
    icon: '⚡',
    title: '三振出局',
    desc: '投手投出好球区内的球，击球员未能击中或击出界外球，累计三次即三振出局，是最常见的出局方式。',
  },
  {
    icon: '🥊',
    title: '四坏球保送',
    desc: '投手连续投出四个坏球（球未进入好球区），击球员可免费上一垒，称为"四坏球保送"（Walk）。',
  },
];

const Rules = () => {
  return (
    <section id="rules" className="bg-slate-800 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">游戏规则</p>
          <h2
            className="font-black text-4xl md:text-5xl text-white uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            如何玩棒球
          </h2>
          <p className="text-slate-400 text-base mt-4 max-w-xl mx-auto">
            了解棒球的基本规则，快速入门这项精彩的运动
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{rule.icon}</div>
              <h3
                className="font-bold text-xl text-white mb-3 group-hover:text-red-400 transition-colors"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {rule.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
