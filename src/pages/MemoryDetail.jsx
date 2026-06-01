import { useParams, Link } from 'react-router-dom';
import { FEATURED_MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../data/memories';

const EMOTION_COLORS = {
  joy: '#f5c842', love: '#e879a0', wonder: '#4f8ef7',
  grief: '#a78bfa', courage: '#2dd4bf', nostalgia: '#fb923c',
  hope: '#34d399', fear: '#94a3b8',
};

function formatCount(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return n.toString();
}

export default function MemoryDetail() {
  const { id } = useParams();
  const memory = FEATURED_MEMORIES.find((m) => m.id === id);

  if (!memory) {
    return (
      <div className="min-h-screen bg-space-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">◇</p>
          <h2 className="font-cinzel text-2xl text-white mb-2">Memory Not Found</h2>
          <p className="text-slate-400 mb-6">This memory may have drifted beyond our reach.</p>
          <Link to="/explore" className="text-nebula-blue hover:text-blue-300 transition-colors">
            ← Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  const color = EMOTION_COLORS[memory.emotion] || '#4f8ef7';
  const era = ERAS.find((e) => e.id === memory.era);
  const emotion = EMOTIONS.find((e) => e.id === memory.emotion);
  const event = LIFE_EVENTS.find((e) => e.id === memory.lifeEvent);

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Hero */}
      <div className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${color}10 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <Link to="/explore" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Archive
          </Link>

          {/* Tags row */}
          <div className="flex flex-wrap gap-2 mb-6">
            {era && (
              <span className="text-xs px-3 py-1 rounded-full" style={{ background: `${era.color}20`, color: era.color, border: `1px solid ${era.color}30` }}>
                {era.label}
              </span>
            )}
            {emotion && (
              <span className="text-xs px-3 py-1 rounded-full" style={{ background: `${color}20`, color, border: `1px solid ${color}30` }}>
                {emotion.icon} {emotion.label}
              </span>
            )}
            {event && (
              <span className="text-xs px-3 py-1 rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/40">
                {event.icon} {event.label}
              </span>
            )}
          </div>

          <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">
            {memory.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {memory.author}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {memory.location}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {memory.year}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {formatCount(memory.views)} views
            </span>
          </div>
        </div>
      </div>

      {/* Memory content */}
      <div className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-space-navy/60 border border-slate-700/40 rounded-3xl p-8 md:p-12 mb-8">
            <div
              className="text-5xl mb-6 font-cinzel"
              style={{ color }}
            >
              "
            </div>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-light italic">
              {memory.excerpt}
            </p>
            <p className="text-slate-400 text-base leading-relaxed mt-6">
              This memory has been preserved in the Archive as part of humanity's collective story.
              It represents one of {formatCount(memory.views)} moments that have resonated with people
              across the world — a testament to the universal threads that connect us all.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {memory.tags.map((tag) => (
              <span key={tag} className="text-sm text-slate-300 bg-slate-800/60 border border-slate-700/40 px-3 py-1.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Related categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {era && (
              <Link
                to={`/explore/era/${era.id}`}
                className="group bg-space-navy/60 border border-slate-700/40 rounded-2xl p-5 hover:border-opacity-80 transition-all duration-300"
              >
                <p className="text-xs text-slate-500 mb-1">More from this era</p>
                <h4 className="font-cinzel font-semibold text-white text-sm group-hover:text-nebula-blue transition-colors">
                  {era.label}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{era.range}</p>
              </Link>
            )}
            {emotion && (
              <Link
                to={`/explore/emotion/${emotion.id}`}
                className="group bg-space-navy/60 border border-slate-700/40 rounded-2xl p-5 hover:border-opacity-80 transition-all duration-300"
              >
                <p className="text-xs text-slate-500 mb-1">More with this emotion</p>
                <h4 className="font-cinzel font-semibold text-white text-sm group-hover:text-nebula-blue transition-colors">
                  {emotion.icon} {emotion.label}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{formatCount(emotion.count)} memories</p>
              </Link>
            )}
            {event && (
              <Link
                to={`/explore/event/${event.id}`}
                className="group bg-space-navy/60 border border-slate-700/40 rounded-2xl p-5 hover:border-opacity-80 transition-all duration-300"
              >
                <p className="text-xs text-slate-500 mb-1">More life events like this</p>
                <h4 className="font-cinzel font-semibold text-white text-sm group-hover:text-nebula-blue transition-colors">
                  {event.icon} {event.label}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{formatCount(event.count)} memories</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
