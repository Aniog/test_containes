import { Link } from 'react-router-dom';
import { ALL_MEMORIES } from '../../data/memories';

const featured = ALL_MEMORIES.filter((m) => m.featured).slice(0, 6);

function MemoryCard({ memory, index }) {
  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group block bg-nebula border border-stardust/40 rounded-2xl p-6 hover:border-aurora/50 hover:shadow-lg hover:shadow-aurora/10 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Era + emotion row */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full border"
          style={{
            color: memory.eraColor,
            borderColor: `${memory.eraColor}40`,
            backgroundColor: `${memory.eraColor}15`,
          }}
        >
          {memory.eraLabel}
        </span>
        <span
          className="text-lg"
          style={{ color: memory.emotionColor }}
          title={memory.emotionLabel}
        >
          {memory.emotionIcon}
        </span>
      </div>

      {/* Memory excerpt */}
      <p className="text-starlight text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-white transition-colors">
        "{memory.excerpt}"
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-stardust/30">
        <div>
          <p className="text-xs text-mist font-medium">{memory.narrator}</p>
          <p className="text-xs font-mono text-ghost">{memory.yearDisplay} · {memory.regionLabel}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-ghost font-mono">{memory.views.toLocaleString()} views</p>
          <p className="text-xs text-ghost">{memory.emotionLabel}</p>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedMemories() {
  return (
    <section className="py-24 px-6 bg-void">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-aurora-light uppercase mb-4">
            ◈ Featured Memories
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-light text-starlight tracking-wide mb-4">
            Voices Across Time
          </h2>
          <p className="text-mist max-w-xl mx-auto leading-relaxed">
            Curated fragments from the archive — moments that capture the full spectrum of human experience.
          </p>
        </div>

        {/* Memory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((memory, i) => (
            <MemoryCard key={memory.id} memory={memory} index={i} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-aurora/40 text-aurora-light hover:bg-aurora/10 font-medium tracking-wide transition-all duration-300"
          >
            Browse All Memories
            <span className="text-aurora-light">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
