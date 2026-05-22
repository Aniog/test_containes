import { Trophy, Users, Globe, Star } from 'lucide-react';

const highlights = [
  {
    icon: Trophy,
    title: '史上最大规模',
    desc: '首届48支球队参赛的世界杯，较以往扩大50%，带来更多精彩对决。',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: Globe,
    title: '三国联合举办',
    desc: '美国、加拿大、墨西哥三国携手，横跨北美大陆，创造历史。',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: Users,
    title: '16座举办城市',
    desc: '美国11座、墨西哥3座、加拿大2座城市，覆盖北美最具活力的都市。',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  {
    icon: Star,
    title: '决赛地点',
    desc: '决赛将于2026年7月19日在美国新泽西州大都会人寿球场举行。',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            赛事概览
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            改写历史的<span className="text-amber-400">世界杯</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            2026年FIFA世界杯将于6月11日至7月19日在北美三国举行，
            这是足球史上规模最大、影响最深远的一届世界杯。
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#1a2035] border border-gray-700/50 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="bg-[#1a2035] border border-gray-700/50 rounded-2xl p-8 md:p-10">
          <h3 className="text-white font-bold text-xl mb-8 text-center">赛事时间线</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-amber-400 to-blue-500 md:-translate-x-1/2" />

            <div className="space-y-8">
              {[
                { date: '2026年6月11日', event: '开幕式 & 揭幕战', detail: '墨西哥城阿兹特克球场', color: 'bg-red-500' },
                { date: '2026年6月11日—7月2日', event: '小组赛阶段', detail: '48支球队分12组进行角逐', color: 'bg-amber-400' },
                { date: '2026年7月3日—6日', event: '淘汰赛开始', detail: '32强晋级，激烈淘汰赛阶段', color: 'bg-blue-500' },
                { date: '2026年7月14日', event: '半决赛', detail: '四强争夺决赛席位', color: 'bg-purple-500' },
                { date: '2026年7月19日', event: '决赛', detail: '大都会人寿球场，冠军诞生', color: 'bg-green-500' },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left pl-10 md:pl-0`}>
                    <p className="text-amber-400 text-sm font-semibold mb-1">{item.date}</p>
                    <p className="text-white font-bold text-base">{item.event}</p>
                    <p className="text-slate-400 text-sm">{item.detail}</p>
                  </div>
                  <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 ${item.color} rounded-full border-2 border-[#1a2035] mt-1`} />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
