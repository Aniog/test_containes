import { Link } from 'react-router-dom';

export default function MemoryCard({ memory }) {
  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group block bg-nebula border border-stardust/40 rounded-2xl p-5 hover:border-aurora/50 hover:shadow-lg hover:shadow-aurora/10 transition-all duration-300"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className="text-xs font-mono tracking-wide px-2.5 py-1 rounded-full border flex-shrink-0"
          style={{
            color: memory.eraColor,
            borderColor: `${memory.eraColor}40`,
            backgroundColor: `${memory.eraColor}15`,
          }}
        >
          {memory.eraLabel}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="text-base"
            style={{ color: memory.emotionColor }}
            title={memory.emotionLabel}
          >
            {memory.emotionIcon}
          </span>
        </div>
      </div>

      {/* Excerpt */}
      <p className="text-starlight text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-white transition-colors">
        "{memory.excerpt}"
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <span className="text-xs px-2 py-0.5 rounded-full bg-stardust/30 text-mist border border-stardust/40">
          {memory.lifeEventLabel}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-stardust/30 text-mist border border-stardust/40">
          {memory.emotionLabel}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-stardust/30">
        <div>
          <p className="text-xs text-mist font-medium">{memory.narrator}</p>
          <p className="text-xs font-mono text-ghost">{memory.yearDisplay} · {memory.regionLabel}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-ghost font-mono">{memory.duration}s</p>
          <p className="text-xs text-ghost">{memory.views.toLocaleString()} views</p>
        </div>
      </div>
    </Link>
  );
}
