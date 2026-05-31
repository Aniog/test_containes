import { useNavigate } from 'react-router-dom';
import { MEMORIES, EMOTIONS } from '../../data/memories';

const getEmotionColor = (emotionId) => {
  const emotion = EMOTIONS.find(e => e.id === emotionId);
  return emotion ? emotion.color : '#94a3b8';
};

export default function FeaturedMemories() {
  const navigate = useNavigate();
  const featured = MEMORIES.filter(m => m.featured).slice(0, 6);

  return (
    <section className="py-24 bg-cosmos-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,21,48,0.8)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-stardust-cyan mb-4 font-inter">
            Featured Memories
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl text-memory-white mb-4">
            Fragments of Humanity
          </h2>
          <p className="text-memory-muted max-w-xl mx-auto font-inter">
            These memories were chosen by our curators as windows into the full spectrum of human experience.
          </p>
        </div>

        {/* Memory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((memory, i) => (
            <MemoryCard key={memory.id} memory={memory} index={i} onClick={() => navigate(`/memory/${memory.id}`)} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-3 border border-cosmos-blue/60 hover:border-nebula-violet text-memory-muted hover:text-memory-white rounded-full transition-all duration-300 font-inter text-sm tracking-wide"
          >
            View All Memories →
          </button>
        </div>
      </div>
    </section>
  );
}

function MemoryCard({ memory, index, onClick }) {
  const emotionColor = getEmotionColor(memory.emotion);
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);

  return (
    <div
      onClick={onClick}
      className="group relative bg-cosmos-dark border border-cosmos-blue/40 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-nebula-violet/60 hover:shadow-[0_0_40px_rgba(5,150,105,0.15)] hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Emotion color accent */}
      <div
        className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: emotionColor, boxShadow: `0 0 8px ${emotionColor}` }}
      />

      {/* Year badge */}
      <div className="inline-flex items-center gap-1.5 mb-4">
        <span className="text-xs tracking-widest uppercase text-memory-muted font-inter">
          {memory.year} · {memory.country}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-cinzel text-lg text-memory-white mb-3 group-hover:text-stardust-cyan transition-colors duration-300 leading-snug">
        {memory.title}
      </h3>

      {/* Excerpt */}
      <p className="text-memory-muted text-sm leading-relaxed mb-5 line-clamp-3 font-inter">
        {memory.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-cosmos-navy border border-cosmos-blue/60 flex items-center justify-center text-xs text-memory-muted">
            {memory.author.charAt(0)}
          </div>
          <span className="text-xs text-memory-muted font-inter">{memory.author}</span>
        </div>
        <div className="flex items-center gap-2">
          {emotion && (
            <span
              className="text-xs px-2 py-0.5 rounded-full border font-inter"
              style={{
                color: emotionColor,
                borderColor: `${emotionColor}40`,
                backgroundColor: `${emotionColor}10`,
              }}
            >
              {emotion.icon} {emotion.label}
            </span>
          )}
        </div>
      </div>

      {/* View count */}
      <div className="mt-3 pt-3 border-t border-cosmos-blue/20 flex items-center justify-between">
        <span className="text-xs text-memory-muted/60 font-inter">
          {memory.views.toLocaleString()} views
        </span>
        <span className="text-xs text-nebula-violet/70 font-inter group-hover:text-nebula-violet transition-colors">
          Read memory →
        </span>
      </div>
    </div>
  );
}
