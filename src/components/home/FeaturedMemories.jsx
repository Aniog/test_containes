import { Link } from 'react-router-dom';
import { MEMORIES, EMOTIONS } from '../../data/memories';

const FeaturedMemory = ({ memory, index }) => {
  const emotion = EMOTIONS.find(e => e.id === memory.emotion);

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="block bg-nebula border border-stardust/50 rounded-xl p-6 memory-card-hover group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="text-lg"
            style={{ color: emotion?.color }}
          >
            {emotion?.icon}
          </span>
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full border"
            style={{
              color: emotion?.color,
              borderColor: `${emotion?.color}40`,
              backgroundColor: `${emotion?.color}10`,
            }}
          >
            {emotion?.label}
          </span>
        </div>
        {memory.verified && (
          <span className="text-xs text-aurora font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-aurora inline-block" />
            Verified
          </span>
        )}
      </div>

      <h3 className="font-cinzel font-semibold text-starlight text-lg mb-3 group-hover:text-aurora-glow transition-colors line-clamp-2">
        {memory.title}
      </h3>

      <p className="text-mist text-sm leading-relaxed line-clamp-3 mb-4">
        {memory.excerpt}
      </p>

      <div className="flex items-center justify-between text-xs text-fog font-mono">
        <span>{memory.contributor}</span>
        <span>{memory.year} CE</span>
      </div>

      <div className="mt-3 text-xs text-fog font-mono flex items-center gap-1">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="opacity-60">
          <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5C4.17 6.5 3.5 5.83 3.5 5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="currentColor" />
        </svg>
        {memory.location}
      </div>
    </Link>
  );
};

const FeaturedMemories = () => {
  const featured = MEMORIES.slice(0, 6);

  return (
    <section className="py-24 px-6 bg-cosmos relative">
      <div className="absolute inset-0 nebula-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="text-aurora text-xs font-mono tracking-widest uppercase mb-4">
            ◈ Featured Fragments
          </div>
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl text-starlight mb-4">
            Voices Across Time
          </h2>
          <p className="text-mist max-w-2xl mx-auto">
            From ancient harvests to the last trains through the Alps — every memory
            is a star in the constellation of human experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((memory, i) => (
            <FeaturedMemory key={memory.id} memory={memory} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-aurora/50 text-aurora px-8 py-4 rounded-lg hover:bg-aurora/10 transition-all duration-300 font-semibold"
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
};

export default FeaturedMemories;
