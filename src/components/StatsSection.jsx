const stats = [
  { value: '500+', label: '服务客户', desc: '覆盖各行各业知名品牌' },
  { value: '12年', label: '行业经验', desc: '深耕广告营销领域' },
  { value: '98%', label: '客户满意度', desc: '持续超越客户期望' },
  { value: '50+', label: '专业团队', desc: '创意与策略精英人才' },
  { value: '300+', label: '成功案例', desc: '涵盖多元行业领域' },
  { value: '20+', label: '城市覆盖', desc: '全国市场深度布局' },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1A1200] via-[#1A0F00] to-[#1A1200] border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gold-gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs leading-snug">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
