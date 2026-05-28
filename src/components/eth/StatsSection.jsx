import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, TrendingDown, Activity, Users, Flame, DollarSign } from 'lucide-react';

const priceData = [
  { month: '2024-01', price: 2200 },
  { month: '2024-02', price: 2900 },
  { month: '2024-03', price: 3800 },
  { month: '2024-04', price: 3200 },
  { month: '2024-05', price: 3700 },
  { month: '2024-06', price: 3400 },
  { month: '2024-07', price: 3100 },
  { month: '2024-08', price: 2600 },
  { month: '2024-09', price: 2400 },
  { month: '2024-10', price: 2700 },
  { month: '2024-11', price: 3300 },
  { month: '2024-12', price: 3500 },
  { month: '2025-01', price: 3200 },
  { month: '2025-02', price: 2800 },
  { month: '2025-03', price: 2000 },
  { month: '2025-04', price: 1800 },
  { month: '2025-05', price: 2500 },
];

const stats = [
  {
    icon: DollarSign,
    label: '当前价格',
    value: '$2,500',
    change: '+5.2%',
    up: true,
    color: 'text-[#627eea]',
    bg: 'bg-[#627eea]/10',
  },
  {
    icon: Activity,
    label: '市值',
    value: '$300B',
    change: '+4.8%',
    up: true,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    icon: Flame,
    label: '累计销毁',
    value: '4.5M ETH',
    change: '价值 $11B+',
    up: true,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: Users,
    label: '质押总量',
    value: '34M ETH',
    change: '占总供应28%',
    up: true,
    color: 'text-[#a855f7]',
    bg: 'bg-[#a855f7]/10',
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1d45] border border-[#627eea]/30 rounded-xl p-3 shadow-xl">
        <p className="text-slate-400 text-xs mb-1">{label}</p>
        <p className="text-white font-bold text-sm">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 bg-[#0f1035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#627eea]/10 border border-[#627eea]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#8b9ff5] text-sm font-medium">实时数据</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ETH
            <span className="bg-gradient-to-r from-[#627eea] to-[#a855f7] bg-clip-text text-transparent">
              {' '}数据统计
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            以太坊网络关键指标一览，数据反映网络健康状况与市场表现。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-[#141530] border border-[#627eea]/20 rounded-2xl p-5 hover:border-[#627eea]/40 transition-all duration-300"
              >
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mb-2">{stat.label}</div>
                <div className={`flex items-center gap-1 text-xs font-medium ${stat.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#141530] border border-[#627eea]/20 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-white text-xl font-bold">ETH 价格走势</h3>
              <p className="text-slate-400 text-sm mt-1">2024年1月 — 2025年5月（美元）</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-3 py-1">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">+13.6% YTD</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={priceData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="ethGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#627eea" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#627eea" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2050" />
              <XAxis
                dataKey="month"
                tick={{ fill: '#64748b', fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => v.slice(5)}
              />
              <YAxis
                tick={{ fill: '#64748b', fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `$${v.toLocaleString()}`}
                width={70}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#627eea"
                strokeWidth={2.5}
                fill="url(#ethGradient)"
                dot={false}
                activeDot={{ r: 5, fill: '#627eea', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="text-slate-500 text-xs mt-4 text-center">
            * 数据仅供参考，不构成投资建议。加密货币投资存在高风险。
          </p>
        </div>
      </div>
    </section>
  );
}
