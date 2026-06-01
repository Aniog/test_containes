import { Link } from 'react-router-dom';
import { MEMORIES, EMOTIONS, ERAS } from '../../data/memories';

const emotionColors = {
  joy: 'text-stardust-gold border-stardust-gold/30 bg-stardust-gold/10',
  love: 'text-supernova-rose border-supernova-rose/30 bg-supernova-rose/10',
  grief: 'text-nebula-blue border-nebula-blue/30 bg-nebula-blue/10',
  wonder: 'text-cosmic-violet border-cosmic-violet/30 bg-cosmic-violet/10',
  fear: 'text-aurora-teal border-aurora-teal/30 bg-aurora-teal/10',
  hope: 'text-stardust-gold border-stardust-gold/30 bg-stardust-gold/10',
  nostalgia: 'text-supernova-rose border-supernova-rose/30 bg-supernova-rose/10',
  pride: 'text-cosmic-violet border-cosmic-violet/30 bg-cosmic-violet/10',
};

function MemoryCard({ memory }) {
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const era = ERAS.find(e => e.id === memory.era);

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group block p-6 rounded-2xl border border-slate-800 bg-space-navy hover:border-nebula-blue/40 hover:shadow-[0_0_30px_rgba(79,142,247,0.1)] transition-all duration-300"
    >
      {/* Top meta */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs uppercase tracking-widest font-medium px-2.5 py-1 rounded-full border"
          style={{ color: era?.color, borderColor: era?.color + '40', backgroundColor: era?.color + '15' }}
        >
          {era?.label}
        </span>
        <span className="text-xs text-slate-600">{memory.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl text-white font-light mb-3 group-hover:text-nebula-blue transition-colors duration-300 leading-snug">
        {memory.title}
      </h3>

      {/* Excerpt */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
        {memory.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full border ${emotionColors[memory.emotion] || 'text-slate-400 border-slate-700'}`}>
            {emotion?.icon} {emotion?.label}
          </span>
        </div>
        <div className="text-xs text-slate-600">
          {memory.fragments.toLocaleString()} fragments
        </div>
      </div>

      {/* Author */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-500">{memory.author}</span>
        <span className="text-xs text-slate-600">{memory.duration}</span>
      </div>
    </Link>
  );
}

export default function FeaturedMemories() {
  const featured = MEMORIES.filter(m => m.featured).slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-space-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-nebula-blue mb-3">
              Featured Memories
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light leading-tight">
              Stories That Define
              <br />
              <span className="italic text-slate-400">What It Means to Be Human</span>
            </h2>
          </div>
          <Link
            to="/explore"
            className="self-start md:self-auto text-sm text-nebula-blue hover:text-white transition-colors duration-200 flex items-center gap-2 group"
          >
            View all memories
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(memory => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      </div>
    </section>
  );
}
