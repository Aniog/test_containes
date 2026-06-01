import { Link } from 'react-router-dom';
import { MEMORIES, EMOTIONS } from '../../data/memories';

const EMOTION_COLORS = {
  joy: '#ffd166',
  love: '#ff6b9d',
  wonder: '#7c83fd',
  grief: '#8892b0',
  nostalgia: '#ff8c42',
  peace: '#4ecdc4',
  fear: '#c45e1a',
  hope: '#a5aaff',
};

export default function FeaturedMemories() {
  const featured = MEMORIES.filter((m) => m.featured).slice(0, 6);

  return (
    <section className="py-24 px-6 relative">
      {/* Nebula blob */}
      <div
        className="nebula-blob"
        style={{ width: 700, height: 400, background: '#7c83fd', top: '20%', right: '-10%' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-aurora font-mono text-sm tracking-widest uppercase mb-3">
            Featured Fragments
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-4">
            Memories That Echo
          </h2>
          <p className="text-mist-light text-lg max-w-2xl mx-auto">
            From the last harvest festival to watching Earth from orbit — these are the fragments
            that resonate across time and distance.
          </p>
        </div>

        {/* Memory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((memory, i) => (
            <MemoryCard key={memory.id} memory={memory} index={i} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-aurora/40 text-aurora-glow font-semibold transition-all duration-300 hover:border-aurora hover:bg-aurora/10"
          >
            Explore All Memories
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function MemoryCard({ memory, index }) {
  const color = EMOTION_COLORS[memory.emotion] || '#7c83fd';
  const emotion = memory.emotion;

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="memory-card-hover block rounded-2xl border border-white/8 overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(13,21,48,0.9) 0%, rgba(7,11,24,0.95) 100%)',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Color bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}88, ${color}22)` }} />

      <div className="p-6">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}88` }}
            />
            <span className="text-xs font-mono text-mist capitalize">{emotion}</span>
          </div>
          <span className="text-xs font-mono text-mist-dark">{memory.eraLabel}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-starlight mb-3 group-hover:text-aurora-glow transition-colors">
          {memory.title}
        </h3>

        {/* Excerpt */}
        <p className="text-mist text-sm leading-relaxed mb-4 line-clamp-3">
          {memory.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: `${color}22`, color }}
            >
              {memory.contributor.charAt(0)}
            </div>
            <span className="text-xs text-mist truncate max-w-[120px]">{memory.contributor}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-mist-dark">
            <span>{memory.locationLabel}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
