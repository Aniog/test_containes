import { Link } from 'react-router-dom';
import { MEMORIES, EMOTIONS, ERAS } from '../../data/memories';

const getEmotionColor = (emotionId) => {
  const e = EMOTIONS.find(em => em.id === emotionId);
  return e ? e.color : '#94a3b8';
};

const getEraColor = (eraId) => {
  const era = ERAS.find(e => e.id === eraId);
  return era ? era.color : '#94a3b8';
};

const formatViews = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return n.toString();
};

const FeaturedMemoryCard = ({ memory, index }) => {
  const emotionColor = getEmotionColor(memory.emotion);
  const eraColor = getEraColor(memory.era);

  return (
    <Link
      to={`/explore?memory=${memory.id}`}
      className="group block p-5 rounded-xl border border-slate-700/40 bg-[#080d1a] hover:border-cyan-500/30 transition-all duration-300 memory-card-glow animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ color: eraColor, backgroundColor: `${eraColor}18`, border: `1px solid ${eraColor}30` }}
        >
          {memory.year}
        </span>
        <span
          className="text-xs px-2.5 py-1 rounded-full"
          style={{ color: emotionColor, backgroundColor: `${emotionColor}15` }}
        >
          {EMOTIONS.find(e => e.id === memory.emotion)?.icon} {memory.emotion}
        </span>
      </div>

      <h3 className="font-cinzel text-base font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
        {memory.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4">
        {memory.excerpt}
      </p>

      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>{memory.contributor}</span>
        <span>{formatViews(memory.views)} views</span>
      </div>
    </Link>
  );
};

const HomeFeatured = () => {
  const featured = MEMORIES.filter(m => m.views > 4_000_000).slice(0, 6);

  return (
    <section className="py-24 px-4 md:px-8 bg-space-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-cyan-400 uppercase tracking-widest mb-3">Most Visited</p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Memories That Moved Millions
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            These fragments have resonated across generations, languages, and continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((memory, i) => (
            <FeaturedMemoryCard key={memory.id} memory={memory} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm uppercase tracking-wider hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
          >
            Browse All Memories
            <span className="text-cyan-400">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
