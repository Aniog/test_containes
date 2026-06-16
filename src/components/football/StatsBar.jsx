const stats = [
  { value: '22', label: '届世界杯' },
  { value: '211', label: '参赛国家' },
  { value: '5B+', label: '全球观众' },
  { value: '1930', label: '首届举办年' },
];

export default function StatsBar() {
  return (
    <section className="bg-green-700 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-green-100 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
