import { useNavigate } from 'react-router-dom';
import { Eye, MapPin, Calendar } from 'lucide-react';
import { EmotionBadge, LifeEventBadge, EraBadge } from './Badges';

export default function MemoryCard({ memory, index = 0 }) {
  const navigate = useNavigate();
  const d = memory?.data || {};

  const excerpt = d.description
    ? d.description.length > 160
      ? d.description.slice(0, 160) + '…'
      : d.description
    : '';

  return (
    <article
      className="memory-card rounded-xl border border-white/[0.07] cursor-pointer group"
      style={{
        background: '#0d1526',
        animationDelay: `${index * 0.05}s`,
      }}
      onClick={() => navigate(`/memory/${memory.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/memory/${memory.id}`)}
    >
      {/* Top accent line */}
      <div
        className="h-px w-full rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, #4a9eff, transparent)' }}
      />

      <div className="p-5 md:p-6">
        {/* Badges row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <EraBadge era={d.era} />
          <EmotionBadge emotion={d.emotion} />
          <LifeEventBadge lifeEvent={d.life_event} />
        </div>

        {/* Title */}
        <h3
          className="font-cinzel text-base md:text-lg font-semibold mb-2 leading-snug group-hover:text-[#4a9eff] transition-colors duration-200"
          style={{ color: '#e8edf5' }}
        >
          {d.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#8899b4' }}>
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-medium" style={{ color: '#e8edf5' }}>
              {d.contributor_name}
            </span>
            {d.contributor_location && (
              <span className="flex items-center gap-1 text-xs" style={{ color: '#4a5568' }}>
                <MapPin className="w-3 h-3" />
                {d.contributor_location}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs" style={{ color: '#4a5568' }}>
            {d.year && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {d.year}
              </span>
            )}
            {d.view_count != null && (
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {d.view_count.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
