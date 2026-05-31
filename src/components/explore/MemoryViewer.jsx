import { useParams, useNavigate } from 'react-router-dom';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS } from '../../data/memories';

export default function MemoryViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const memory = MEMORIES.find(m => m.id === id);

  if (!memory) {
    return (
      <div className="min-h-screen bg-cosmos-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4 text-memory-muted">◇</div>
          <h2 className="font-cinzel text-2xl text-memory-white mb-4">Memory Not Found</h2>
          <button onClick={() => navigate('/explore')} className="text-stardust-cyan hover:text-memory-white transition-colors font-inter">
            ← Return to Archive
          </button>
        </div>
      </div>
    );
  }

  const emotion = EMOTIONS.find(e => e.id === memory.emotion);
  const era = ERAS.find(e => e.id === memory.era);
  const lifeEvent = LIFE_EVENTS.find(e => e.id === memory.lifeEvent);
  const related = MEMORIES.filter(m => m.id !== memory.id && (m.emotion === memory.emotion || m.era === memory.era)).slice(0, 3);

  return (
    <div className="min-h-screen bg-cosmos-black pt-16">
      {/* Hero banner */}
      <div className="relative bg-cosmos-navy border-b border-cosmos-blue/20 overflow-hidden">
        {/* Decorative glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: emotion?.color || '#059669' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 md:px-8 py-16">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-memory-muted hover:text-memory-white transition-colors mb-8 font-inter text-sm"
          >
            ← Back to Archive
          </button>

          {/* Meta tags */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {era && (
              <span
                className="text-xs px-3 py-1 rounded-full font-inter border"
                style={{ color: era.color, borderColor: `${era.color}40`, backgroundColor: `${era.color}10` }}
              >
                {era.label}
              </span>
            )}
            {emotion && (
              <span
                className="text-xs px-3 py-1 rounded-full font-inter border"
                style={{ color: emotion.color, borderColor: `${emotion.color}40`, backgroundColor: `${emotion.color}10` }}
              >
                {emotion.icon} {emotion.label}
              </span>
            )}
            {lifeEvent && (
              <span className="text-xs px-3 py-1 rounded-full font-inter border border-cosmos-blue/40 text-memory-muted bg-cosmos-dark">
                {lifeEvent.icon} {lifeEvent.label}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-cinzel text-3xl md:text-5xl text-memory-white mb-6 leading-tight">
            {memory.title}
          </h1>

          {/* Author & location */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-memory-muted font-inter">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cosmos-dark border border-cosmos-blue/40 flex items-center justify-center text-sm text-memory-white font-cinzel">
                {memory.author.charAt(0)}
              </div>
              <div>
                <div className="text-memory-white text-sm">{memory.author}</div>
                <div className="text-xs text-memory-muted/60">{memory.country}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-memory-muted/60">◎</span>
              <span>{memory.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-memory-muted/60">◷</span>
              <span>{memory.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-memory-muted/60">◈</span>
              <span>{memory.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Memory content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main text */}
          <div className="lg:col-span-2">
            {/* Opening quote decoration */}
            <div
              className="text-6xl font-cinzel leading-none mb-4 opacity-30"
              style={{ color: emotion?.color || '#059669' }}
            >
              "
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-memory-white text-lg md:text-xl leading-relaxed font-inter mb-8">
                {memory.excerpt}
              </p>
              {/* Extended content (simulated) */}
              <p className="text-memory-muted leading-relaxed font-inter mb-6">
                This memory was submitted to the Global Memory Preservation Initiative as part of the
                ongoing effort to document the full breadth of human experience before the interstellar migration.
                It has been preserved in its original form, with only minor transcription corrections.
              </p>
              <p className="text-memory-muted leading-relaxed font-inter">
                The contributor chose to share this memory because they believed it captured something
                essential about what it means to be human — something that should travel with us to the stars.
                It has been viewed {memory.views.toLocaleString()} times and has been translated into 47 languages.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-cosmos-blue/20">
              <p className="text-xs tracking-widest uppercase text-memory-muted mb-3 font-inter">Tags</p>
              <div className="flex flex-wrap gap-2">
                {memory.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-cosmos-dark border border-cosmos-blue/30 rounded-full text-memory-muted font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Memory details card */}
            <div className="bg-cosmos-dark border border-cosmos-blue/30 rounded-xl p-5">
              <h3 className="font-cinzel text-sm text-memory-white mb-4 tracking-wide">Memory Details</h3>
              <dl className="space-y-3">
                {[
                  { label: 'Year', value: memory.year },
                  { label: 'Location', value: `${memory.country}, ${memory.location}` },
                  { label: 'Era', value: era?.label },
                  { label: 'Emotion', value: emotion ? `${emotion.icon} ${emotion.label}` : null },
                  { label: 'Life Event', value: lifeEvent ? `${lifeEvent.icon} ${lifeEvent.label}` : null },
                ].filter(d => d.value).map(detail => (
                  <div key={detail.label} className="flex justify-between items-start gap-2">
                    <dt className="text-xs text-memory-muted/60 font-inter uppercase tracking-wider flex-shrink-0">{detail.label}</dt>
                    <dd className="text-xs text-memory-white font-inter text-right">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Preservation status */}
            <div className="bg-cosmos-dark border border-nebula-violet/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-nebula-violet animate-pulse" />
                <span className="text-xs text-nebula-violet font-cinzel tracking-wider">Preserved</span>
              </div>
              <p className="text-xs text-memory-muted font-inter leading-relaxed">
                This memory is stored in quantum-stable format and will travel aboard the
                Exodus Fleet, departing 2094.
              </p>
            </div>
          </div>
        </div>

        {/* Related memories */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-cosmos-blue/20">
            <h2 className="font-cinzel text-xl text-memory-white mb-8">Related Memories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map(rel => {
                const relEmotion = EMOTIONS.find(e => e.id === rel.emotion);
                return (
                  <div
                    key={rel.id}
                    onClick={() => navigate(`/memory/${rel.id}`)}
                    className="group bg-cosmos-dark border border-cosmos-blue/30 rounded-xl p-5 cursor-pointer hover:border-nebula-violet/50 transition-all duration-300"
                  >
                    <div className="text-xs text-memory-muted/60 mb-2 font-inter">{rel.year} · {rel.country}</div>
                    <h3 className="font-cinzel text-sm text-memory-white mb-2 group-hover:text-stardust-cyan transition-colors leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-memory-muted line-clamp-2 font-inter">{rel.excerpt}</p>
                    {relEmotion && (
                      <div className="mt-3 text-xs font-inter" style={{ color: relEmotion.color }}>
                        {relEmotion.icon} {relEmotion.label}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
