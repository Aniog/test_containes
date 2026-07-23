const events = [
  {
    year: '1902',
    title: '早期规划',
    desc: '美国垦务局开始研究科罗拉多河的水资源开发潜力，提出在黑峡谷建造大型水坝的初步构想。',
  },
  {
    year: '1922',
    title: '科罗拉多河协议',
    desc: '美国西部七个州签署《科罗拉多河协议》，就水资源分配达成协议，为大坝建设奠定法律基础。',
  },
  {
    year: '1928',
    title: '国会批准',
    desc: '美国国会通过《博尔德峡谷项目法案》，正式批准建设大坝，初始预算为1.65亿美元。',
  },
  {
    year: '1931年3月',
    title: '破土动工',
    desc: '大坝正式开工建设。六家公司联合体（Six Companies Inc.）赢得建设合同，工程浩大的施工工作正式启动。',
  },
  {
    year: '1932',
    title: '改道科罗拉多河',
    desc: '工程师们成功将科罗拉多河改道，通过四条隧道绕过施工区域，这是工程史上最复杂的改道工程之一。',
  },
  {
    year: '1933',
    title: '混凝土浇筑开始',
    desc: '大规模混凝土浇筑工作开始。为防止混凝土因水化热开裂，工程师设计了独特的冷却管道系统。',
  },
  {
    year: '1935年9月',
    title: '罗斯福总统揭幕',
    desc: '富兰克林·罗斯福总统亲临现场，主持大坝落成典礼。大坝比计划提前两年完工，成为大萧条时期的精神象征。',
  },
  {
    year: '1936',
    title: '发电机组投入运行',
    desc: '第一台发电机组正式投入运行，开始向加利福尼亚州、内华达州和亚利桑那州输送电力。',
  },
  {
    year: '1947',
    title: '正式命名胡佛大坝',
    desc: '美国国会正式将大坝命名为"胡佛大坝"，以纪念在大坝规划和建设中发挥关键作用的赫伯特·胡佛总统。',
  },
  {
    year: '1985',
    title: '列入国家历史地标',
    desc: '胡佛大坝被列入美国国家历史地标名录，并被美国土木工程师学会评选为"现代土木工程七大奇迹"之一。',
  },
];

export default function History() {
  return (
    <section id="history" className="bg-navyBlack py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-accentGold text-sm uppercase tracking-[0.3em] mb-3 font-sans">历史沿革</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-warmWhite mb-4">
            从构想到传奇
          </h2>
          <p className="text-mutedBlue max-w-xl mx-auto">
            胡佛大坝的建设历程跨越数十年，见证了美国从规划到实现的伟大意志
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-steelBorder md:-translate-x-px" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <div
                key={event.year}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year badge — mobile: left-aligned; desktop: centered */}
                <div className="flex md:hidden items-center gap-4 pl-10">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-accentGold flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-navyBlack" />
                  </div>
                  <span className="bg-accentGold text-navyBlack text-xs font-bold px-3 py-1 rounded-full">
                    {event.year}
                  </span>
                </div>

                {/* Desktop layout */}
                <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
                  <div className="bg-darkSlate border border-steelBorder rounded-xl p-5 max-w-sm hover:border-accentGold/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-accentGold text-navyBlack text-xs font-bold px-3 py-1 rounded-full">
                        {event.year}
                      </span>
                      <h3 className="font-serif text-warmWhite font-semibold">{event.title}</h3>
                    </div>
                    <p className="text-mutedBlue text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>

                {/* Desktop center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accentGold border-2 border-navyBlack top-5" />

                {/* Desktop spacer */}
                <div className="hidden md:block w-1/2" />

                {/* Mobile card */}
                <div className="md:hidden pl-10">
                  <div className="bg-darkSlate border border-steelBorder rounded-xl p-5 hover:border-accentGold/40 transition-colors">
                    <h3 className="font-serif text-warmWhite font-semibold mb-2">{event.title}</h3>
                    <p className="text-mutedBlue text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
