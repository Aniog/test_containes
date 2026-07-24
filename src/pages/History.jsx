import { laureates, years } from '../data/laureates';

const milestones = [
  {
    year: 1924,
    title: '国际数学联盟成立',
    desc: '国际数学联盟（IMU）在斯特拉斯堡成立，为菲尔兹奖的设立奠定了组织基础。',
    type: 'org',
  },
  {
    year: 1932,
    title: '菲尔兹提出构想',
    desc: '加拿大数学家约翰·查尔斯·菲尔兹在苏黎世国际数学家大会上提出设立国际数学奖的构想，并捐出个人遗产作为奖金。',
    type: 'founding',
  },
  {
    year: 1936,
    title: '首届菲尔兹奖颁发',
    desc: '在奥斯陆国际数学家大会上，首届菲尔兹奖授予芬兰数学家拉尔斯·阿尔福斯和美国数学家杰西·道格拉斯，开创了数学界最高荣誉的先河。',
    type: 'award',
  },
  {
    year: 1950,
    title: '战后重启',
    desc: '二战中断了颁奖，1950年在剑桥重启，授予洛朗·施瓦茨和阿特勒·塞尔伯格。',
    type: 'award',
  },
  {
    year: 1966,
    title: '格罗滕迪克时代',
    desc: '亚历山大·格罗滕迪克获奖，他彻底重建了代数几何的基础，但因抗议苏联军事资助而拒绝出席颁奖典礼。',
    type: 'milestone',
  },
  {
    year: 1982,
    title: '丘成桐获奖',
    desc: '华裔数学家丘成桐因证明卡拉比猜想获奖，成为首位获得菲尔兹奖的华人数学家。',
    type: 'milestone',
  },
  {
    year: 1990,
    title: '物理学家获奖',
    desc: '理论物理学家爱德华·威滕获奖，成为迄今唯一一位以物理学研究获得菲尔兹奖的人。',
    type: 'milestone',
  },
  {
    year: 2006,
    title: '佩雷尔曼拒绝领奖',
    desc: '格里戈里·佩雷尔曼因证明庞加莱猜想获奖，但他拒绝领取奖项，成为数学史上的传奇。同年陶哲轩获奖。',
    type: 'milestone',
  },
  {
    year: 2014,
    title: '首位女性获奖者',
    desc: '伊朗数学家玛利亚姆·米尔扎哈尼成为菲尔兹奖历史上首位女性获奖者，打破了78年的性别壁垒。',
    type: 'milestone',
  },
  {
    year: 2022,
    title: '第二位女性获奖者',
    desc: '乌克兰数学家玛丽娜·维亚佐夫斯卡因解决8维和24维球堆积问题获奖，成为第二位女性获奖者。',
    type: 'milestone',
  },
];

const typeColors = {
  org: 'bg-slate-100 text-slate-700 border-slate-200',
  founding: 'bg-amber-100 text-amber-800 border-amber-200',
  award: 'bg-blue-50 text-blue-700 border-blue-200',
  milestone: 'bg-gold/10 text-gold-muted border-gold/30',
};

const typeLabels = {
  org: '组织',
  founding: '创立',
  award: '颁奖',
  milestone: '里程碑',
};

export default function History() {
  const byYear = years.reduce((acc, y) => {
    acc[y] = laureates.filter(l => l.year === y);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-ivory-light">
      {/* Header */}
      <div className="bg-navy pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-3">History</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
            历史沿革
          </h1>
          <p className="text-ivory/60 max-w-2xl">
            从1924年的构想到今天，菲尔兹奖走过了近百年的历程，
            见证了数学的辉煌发展与无数天才的璀璨时刻。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            重要时间节点
          </h2>

          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-amber-200/60 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className={`bg-white rounded-xl p-6 border border-amber-200/40 shadow-sm hover:shadow-md transition-shadow ${
                      i % 2 === 0 ? 'md:ml-auto' : ''
                    }`}>
                      <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${typeColors[m.type]}`}>
                          {typeLabels[m.type]}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-navy text-lg mb-2">{m.title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Year dot */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-gold border-2 border-white shadow-md" />
                  </div>

                  {/* Year label (mobile) */}
                  <div className="md:hidden flex items-center gap-3 -mt-2">
                    <div className="w-3 h-3 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-gold font-bold text-sm">{m.year}</span>
                  </div>

                  {/* Year label (desktop) */}
                  <div className={`hidden md:flex md:w-[calc(50%-2rem)] items-start pt-5 ${
                    i % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:justify-end'
                  }`}>
                    <span className="font-serif text-2xl font-bold text-gold">{m.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards by year table */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            历届颁奖一览
          </h2>

          <div className="overflow-x-auto rounded-xl border border-amber-200/40 shadow-sm">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-navy text-ivory">
                  <th className="text-left px-6 py-4 font-semibold text-sm">年份</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">获奖者</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm hidden md:table-cell">国家</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm hidden lg:table-cell">研究领域</th>
                </tr>
              </thead>
              <tbody>
                {years.map((year, yi) =>
                  byYear[year].map((l, li) => (
                    <tr
                      key={l.id}
                      className={`border-t border-amber-100 hover:bg-ivory-light transition-colors ${
                        yi % 2 === 0 ? 'bg-white' : 'bg-ivory-light/50'
                      }`}
                    >
                      {li === 0 && (
                        <td
                          rowSpan={byYear[year].length}
                          className="px-6 py-4 font-serif font-bold text-gold text-lg align-top"
                        >
                          {year}
                        </td>
                      )}
                      <td className="px-6 py-4">
                        <div className="font-semibold text-navy text-sm">{l.name}</div>
                        {l.note && (
                          <span className="text-xs text-gold-muted">{l.note}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-navy/60 text-sm hidden md:table-cell">{l.country}</td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                          {l.field}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
