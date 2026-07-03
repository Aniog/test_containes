const stats = [
  { value: '3', label: '世界杯冠军', sub: '1978 · 1986 · 2022' },
  { value: '15', label: '美洲杯冠军', sub: '南美洲最多' },
  { value: '1893', label: '建队年份', sub: '历史悠久' },
];

const StatsBar = () => (
  <section className="bg-white py-12 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-5xl md:text-6xl font-extrabold text-argentina-blue leading-none">
              {stat.value}
            </span>
            <span className="text-navy font-bold text-lg mt-1">{stat.label}</span>
            <span className="text-gray-500 text-sm">{stat.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
