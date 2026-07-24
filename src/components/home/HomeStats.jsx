import { stats } from '../../data/laureates';

const statItems = [
  { value: stats.total, label: '历届获奖者', suffix: '位' },
  { value: stats.years, label: '颁奖届次', suffix: '届' },
  { value: stats.countries, label: '获奖国家', suffix: '个' },
  { value: stats.latestYear - stats.firstYear, label: '历史跨度', suffix: '年' },
];

export default function HomeStats() {
  return (
    <section className="bg-navy-light py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map(({ value, label, suffix }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
                {value}
                <span className="text-2xl md:text-3xl">{suffix}</span>
              </div>
              <div className="text-ivory/60 text-sm md:text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
