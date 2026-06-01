import { useState } from 'react';
import { MapPin, Calendar, User, Tag } from 'lucide-react';

const emotionBadge = 'bg-aurora-500/20 text-aurora-300 border border-aurora-500/30';
const eraBadge = 'bg-stardust-500/20 text-stardust-300 border border-stardust-500/30';
const locationBadge = 'bg-memory-teal/20 text-memory-teal border border-memory-teal/30';
const eventBadge = 'bg-memory-pink/20 text-memory-pink border border-memory-pink/30';

export default function MemoryCard({ memory, featured = false }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`
        rounded-2xl border border-nebula-500/20 bg-cosmos-800/60 backdrop-blur-sm
        hover:border-nebula-400/40 hover:bg-cosmos-700/60 transition-all duration-300
        cursor-pointer group overflow-hidden
        ${featured ? 'flex flex-col' : ''}
      `}
      onClick={() => setExpanded(e => !e)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && setExpanded(v => !v)}
      aria-expanded={expanded}
    >
      {/* Color accent bar */}
      <div
        className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${memory.color}80, ${memory.color}20)` }}
      />

      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Badges */}
        <div className="flex flex-wrap gap-1.5">
          <span className={`font-mono text-xs px-2.5 py-0.5 rounded-full ${eraBadge}`}>
            {memory.era}
          </span>
          <span className={`font-mono text-xs px-2.5 py-0.5 rounded-full ${emotionBadge}`}>
            {memory.emotion}
          </span>
          <span className={`font-mono text-xs px-2.5 py-0.5 rounded-full ${eventBadge}`}>
            {memory.lifeEvent}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-cinzel text-lg font-semibold text-text-primary group-hover:text-nebula-200 transition-colors leading-snug">
          {memory.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-text-secondary text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
          {memory.excerpt}
        </p>

        {expanded && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {memory.tags.map(tag => (
              <span key={tag} className="font-mono text-xs text-text-muted bg-cosmos-700/50 px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mt-auto pt-3 border-t border-cosmos-700/50">
          <span className="flex items-center gap-1 font-mono text-xs text-text-muted">
            <MapPin className="w-3 h-3" />
            {memory.location}
          </span>
          <span className="flex items-center gap-1 font-mono text-xs text-text-muted">
            <Calendar className="w-3 h-3" />
            {memory.year}
          </span>
          <span className="flex items-center gap-1 font-mono text-xs text-text-muted ml-auto">
            <User className="w-3 h-3" />
            {memory.contributor}
          </span>
        </div>
      </div>
    </article>
  );
}
