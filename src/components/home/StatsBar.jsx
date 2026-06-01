import { STATS } from '../../data/memories';

const stats = [
  { value: STATS.totalMemories, label: 'Memories Preserved', color: 'text-aurora-light' },
  { value: STATS.totalNarrators, label: 'Human Narrators', color: 'text-nova-light' },
  { value: STATS.totalEras, label: 'Centuries Covered', color: 'text-memory-light' },
  { value: STATS.totalRegions, label: 'Nations Represented', color: 'text-starlight' },
];

export default function StatsBar() {
  return (
    <section className="bg-nebula border-y border-stardust/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`font-cinzel text-3xl md:text-4xl font-light mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs font-mono tracking-widest text-ghost uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
