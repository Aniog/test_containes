import { useNavigate } from 'react-router-dom';
import { getFeaturedMemories, ERAS, EMOTIONS } from '../../data/memories';

const eraColorMap = Object.fromEntries(ERAS.map(e => [e.id, e.color]));
const emotionColorMap = Object.fromEntries(EMOTIONS.map(e => [e.id, e.color]));

function MemoryCard({ memory, onClick }) {
  const eraData = ERAS.find(e => e.id === memory.era);
  const emotionData = EMOTIONS.find(e => e.id === memory.emotion);

  return (
    <button
      onClick={onClick}
      className="group text-left w-full bg-space-navy border border-white/10 rounded-2xl p-6 hover:border-cosmic-blue/40 hover:bg-space-midnight transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,158,255,0.15)]"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex flex-wrap gap-2">
          {eraData && (
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full border"
              style={{
                color: eraData.color,
                borderColor: `${eraData.color}44`,
                backgroundColor: `${eraData.color}18`,
              }}
            >
              {eraData.label}
            </span>
          )}
          {emotionData && (
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full border"
              style={{
                color: emotionData.color,
                borderColor: `${emotionData.color}44`,
                backgroundColor: `${emotionData.color}18`,
              }}
            >
              {emotionData.icon} {emotionData.label}
            </span>
          )}
        </div>
        <span className="text-star-dim text-xs font-mono shrink-0">{memory.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-space text-lg font-semibold text-star-white mb-3 group-hover:text-cosmic-blue transition-colors duration-200">
        {memory.title}
      </h3>

      {/* Excerpt */}
      <p className="text-star-dim text-sm leading-relaxed mb-4 line-clamp-3">
        {memory.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div>
          <div className="text-star-white text-xs font-medium">{memory.contributor}</div>
          <div className="text-star-dim text-xs font-mono">{memory.location}</div>
        </div>
        <div className="text-right">
          <div className="text-cosmic-blue text-xs font-mono">{memory.resonances.toLocaleString()} resonances</div>
          <div className="text-star-dim text-xs font-mono">{memory.archiveId}</div>
        </div>
      </div>
    </button>
  );
}

export default function FeaturedMemories() {
  const navigate = useNavigate();
  const featured = getFeaturedMemories();

  return (
    <section className="py-24 px-4 bg-space-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-cosmic-amber text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-cosmic-amber/50" />
            Featured Memories
            <span className="w-8 h-px bg-cosmic-amber/50" />
          </div>
          <h2 className="font-space text-3xl md:text-4xl font-bold text-star-white mb-4">
            Stories That Resonate Across Time
          </h2>
          <p className="text-star-dim max-w-xl mx-auto text-base leading-relaxed">
            These memories have touched the most hearts in our archive — moments of ordinary life that became extraordinary through the act of remembering.
          </p>
        </div>

        {/* Memory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map(memory => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              onClick={() => navigate(`/memory/${memory.id}`)}
            />
          ))}
        </div>

        {/* View all */}
        <div className="text-center">
          <button
            onClick={() => navigate('/explore')}
            className="border border-cosmic-blue/40 text-cosmic-blue hover:bg-cosmic-blue/10 font-semibold px-8 py-3 rounded-xl transition-all duration-300 font-space"
          >
            Explore All 4.7 Million Memories →
          </button>
        </div>
      </div>
    </section>
  );
}
