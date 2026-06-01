import { useNavigate } from 'react-router-dom';
import { MEMORIES, EMOTIONS, ERAS } from '../../data/memories';

function getEraColor(eraId) {
  const era = ERAS.find(e => e.id === eraId);
  return era?.color || '#4f8ef7';
}

function getEmotionColor(emotionId) {
  const emotion = EMOTIONS.find(e => e.id === emotionId);
  return emotion?.color || '#4f8ef7';
}

function MemoryCard({ memory, size = 'normal' }) {
  const navigate = useNavigate();
  const eraColor = getEraColor(memory.era);
  const emotionColor = getEmotionColor(memory.emotion);

  return (
    <button
      onClick={() => navigate(`/memory/${memory.id}`)}
      className={`w-full text-left group bg-space-navy border border-slate-800 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden ${size === 'large' ? 'p-8' : 'p-6'}`}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = eraColor + '50';
        e.currentTarget.style.boxShadow = `0 0 30px ${eraColor}15`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgb(30 41 59)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top accent line */}
      <div className="h-px w-full mb-5 opacity-60" style={{ background: `linear-gradient(to right, ${eraColor}, transparent)` }} />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span
          className="text-xs px-2 py-0.5 rounded-full font-inter font-medium"
          style={{ backgroundColor: eraColor + '20', color: eraColor }}
        >
          {memory.year}
        </span>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-inter font-medium capitalize"
          style={{ backgroundColor: emotionColor + '20', color: emotionColor }}
        >
          {memory.emotion}
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-cinzel text-white mb-3 leading-snug ${size === 'large' ? 'text-xl' : 'text-base'}`}>
        {memory.title}
      </h3>

      {/* Excerpt */}
      <p className="text-slate-400 text-sm font-inter leading-relaxed mb-4 line-clamp-3">
        {memory.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-slate-600 text-xs font-inter">{memory.author}</span>
        <span className="text-slate-600 text-xs font-inter">
          {(memory.views / 1000).toFixed(0)}k views
        </span>
      </div>
    </button>
  );
}

export default function FeaturedMemories() {
  const navigate = useNavigate();
  const featured = MEMORIES.filter(m => m.featured).slice(0, 6);

  return (
    <section className="py-24 px-4 bg-space-navy">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-aurora-teal text-sm tracking-[0.3em] uppercase font-inter mb-3">Featured</p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-white">
              Memories That Endure
            </h2>
          </div>
          <button
            onClick={() => navigate('/explore')}
            className="text-nebula-blue hover:text-blue-400 text-sm font-inter transition-colors self-start md:self-auto"
          >
            View all memories →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((memory, i) => (
            <MemoryCard key={memory.id} memory={memory} size={i === 0 ? 'large' : 'normal'} />
          ))}
        </div>
      </div>
    </section>
  );
}
