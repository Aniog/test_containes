const stats = [
  { value: '221m', label: '坝高', desc: '相当于60层楼' },
  { value: '379m', label: '坝顶长度', desc: '横跨黑峡谷' },
  { value: '660万', label: '吨混凝土', desc: '足以铺设一条绕地球两圈的公路' },
  { value: '21,000', label: '峰值工人数', desc: '大萧条时期的就业奇迹' },
  { value: '112', label: '施工死亡人数', desc: '官方记录的工程牺牲者' },
  { value: '5年', label: '建设工期', desc: '比计划提前2年完工' },
  { value: '35TWh', label: '年发电量', desc: '供应130万户家庭用电' },
  { value: '700万', label: '年游客量', desc: '美国最受欢迎景点之一' },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-darkSlate border-t border-b border-steelBorder py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-accentGold text-sm uppercase tracking-[0.3em] mb-3 font-sans">关键数据</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-warmWhite">
            数字背后的震撼
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navyBlack border border-steelBorder rounded-xl p-5 md:p-6 text-center hover:border-accentGold/50 transition-colors"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-accentGold mb-2">
                {stat.value}
              </div>
              <div className="text-warmWhite font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-dimGrey text-xs leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
