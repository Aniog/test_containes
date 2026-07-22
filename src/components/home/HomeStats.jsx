const stats = [
  { value: '26+', label: '平均每年台风数', desc: '西北太平洋生成' },
  { value: '7-9', label: '登陆中国台风', desc: '平均每年登陆数量' },
  { value: '17m/s', label: '台风最低风速', desc: '底层中心附近最大风速' },
  { value: '1000km', label: '最大影响半径', desc: '超强台风风圈范围' },
];

export default function HomeStats() {
  return (
    <section className="py-16 bg-[#0d1b2a] border-y border-slate-700/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#48cae4] font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm md:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-slate-400 text-xs md:text-sm">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
