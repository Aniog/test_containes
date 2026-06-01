import { stats } from '@/data/memories';

const statItems = [
  { value: stats.totalMemories, label: 'Memories Preserved', color: 'text-nebula-300' },
  { value: stats.contributors, label: 'Contributors', color: 'text-aurora-300' },
  { value: stats.countries, label: 'Nations', color: 'text-stardust-300' },
  { value: stats.languages, label: 'Languages', color: 'text-memory-teal' },
  { value: `${stats.yearsSpanned.toLocaleString()} yrs`, label: 'Years of History', color: 'text-memory-pink' },
];

export default function HomeStats() {
  return (
    <section className="bg-cosmos-900 py-16 border-y border-nebula-500/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {statItems.map((item) => (
            <div key={item.label} className="text-center">
              <div className={`font-cinzel text-3xl md:text-4xl font-bold mb-1 ${item.color}`}>
                {item.value}
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
