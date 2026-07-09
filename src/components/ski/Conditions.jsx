import { Cloud, Snowflake, Wind, Eye } from 'lucide-react';

const resorts = [
  {
    name: '策马特',
    country: '瑞士',
    snowDepth: '185cm',
    freshSnow: '22cm',
    temp: '-8°C',
    wind: '12 km/h',
    visibility: '极佳',
    status: '开放',
    statusColor: 'text-emerald-400',
    openRuns: 52,
    totalRuns: 58,
    condition: '粉雪',
    conditionColor: 'bg-sky-blue',
  },
  {
    name: '二世古',
    country: '日本',
    snowDepth: '210cm',
    freshSnow: '45cm',
    temp: '-15°C',
    wind: '8 km/h',
    visibility: '良好',
    status: '开放',
    statusColor: 'text-emerald-400',
    openRuns: 30,
    totalRuns: 30,
    condition: '深粉雪',
    conditionColor: 'bg-purple-500',
  },
  {
    name: '阿斯彭',
    country: '美国',
    snowDepth: '142cm',
    freshSnow: '8cm',
    temp: '-12°C',
    wind: '18 km/h',
    visibility: '良好',
    status: '开放',
    statusColor: 'text-emerald-400',
    openRuns: 76,
    totalRuns: 88,
    condition: '压实雪',
    conditionColor: 'bg-glacier',
  },
  {
    name: '霞慕尼',
    country: '法国',
    snowDepth: '165cm',
    freshSnow: '15cm',
    temp: '-10°C',
    wind: '25 km/h',
    visibility: '一般',
    status: '部分开放',
    statusColor: 'text-yellow-400',
    openRuns: 38,
    totalRuns: 55,
    condition: '混合雪',
    conditionColor: 'bg-slope-orange',
  },
];

export default function Conditions() {
  return (
    <section id="conditions" className="bg-gradient-to-b from-frost/30 to-deep-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sky-blue text-sm font-semibold uppercase tracking-widest mb-3">
            实时数据
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-snow-white mb-4">
            雪况实时报告
          </h2>
          <p className="text-glacier text-lg max-w-2xl mx-auto">
            出发前查看最新雪况，掌握积雪深度、新雪量和开放雪道信息，做好充分准备
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resorts.map((resort) => (
            <div
              key={resort.name}
              className="bg-frost rounded-2xl border border-white/10 hover:border-sky-blue/30 transition-all p-6 shadow-xl shadow-black/40"
            >
              {/* Resort Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-snow-white">{resort.name}</h3>
                  <p className="text-glacier text-sm">{resort.country}</p>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-bold ${resort.statusColor}`}>● {resort.status}</span>
                  <div className="mt-1">
                    <span className={`text-xs font-bold text-snow-white px-2.5 py-1 rounded-full ${resort.conditionColor}`}>
                      {resort.condition}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-deep-navy/60 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Snowflake className="w-4 h-4 text-sky-blue" />
                    <span className="text-glacier text-xs">积雪深度</span>
                  </div>
                  <div className="text-snow-white font-bold text-xl">{resort.snowDepth}</div>
                </div>
                <div className="bg-deep-navy/60 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Cloud className="w-4 h-4 text-sky-blue" />
                    <span className="text-glacier text-xs">新雪量</span>
                  </div>
                  <div className="text-snow-white font-bold text-xl">{resort.freshSnow}</div>
                </div>
                <div className="bg-deep-navy/60 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Wind className="w-4 h-4 text-sky-blue" />
                    <span className="text-glacier text-xs">风速</span>
                  </div>
                  <div className="text-snow-white font-bold text-xl">{resort.wind}</div>
                </div>
                <div className="bg-deep-navy/60 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="w-4 h-4 text-sky-blue" />
                    <span className="text-glacier text-xs">能见度</span>
                  </div>
                  <div className="text-snow-white font-bold text-xl">{resort.visibility}</div>
                </div>
              </div>

              {/* Open Runs Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-glacier">开放雪道</span>
                  <span className="text-snow-white font-semibold">
                    {resort.openRuns} / {resort.totalRuns} 条
                  </span>
                </div>
                <div className="h-2 bg-deep-navy/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-blue to-blue-400 rounded-full transition-all"
                    style={{ width: `${(resort.openRuns / resort.totalRuns) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Update Note */}
        <p className="text-center text-glacier text-sm mt-8">
          数据每日更新 · 最后更新：2026年1月9日 08:00 UTC
        </p>
      </div>
    </section>
  );
}
