import { Link } from 'react-router-dom'
import { EMOTION_COLORS } from '../../api/memories'

export default function MemoryCard({ memory }) {
  const d = memory.data
  const emotion = EMOTION_COLORS[d.emotion] || EMOTION_COLORS.Wonder

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group block rounded-xl border border-stardust bg-void hover:border-aurora/40 transition-all duration-300 hover:shadow-xl hover:shadow-aurora/10 overflow-hidden"
    >
      <div className="p-5">
        {/* Top row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full border flex-shrink-0"
            style={{ color: emotion.color, borderColor: emotion.border, backgroundColor: emotion.bg }}
          >
            {d.emotion}
          </span>
          <div className="text-right">
            <div className="text-xs text-twilight font-mono">{d.year || '—'}</div>
            <div className="text-xs text-twilight font-mono">{d.era}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-starlight font-semibold text-sm mb-2 leading-snug group-hover:text-aurora-light transition-colors duration-200 line-clamp-2">
          {d.title}
        </h3>

        {/* Excerpt */}
        <p className="text-moonlight text-xs leading-relaxed line-clamp-3 mb-3">
          {d.description}
        </p>

        {/* Tags */}
        {d.tags && d.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {d.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-twilight font-mono bg-stardust/50 px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-twilight font-mono pt-3 border-t border-stardust/50">
          <span className="truncate max-w-[60%]">{d.location || d.contributor_origin || '—'}</span>
          <span>{d.life_event}</span>
        </div>

        {d.contributor_name && (
          <div className="mt-2 text-xs text-twilight/70 truncate">
            — {d.contributor_name}
          </div>
        )}
      </div>
    </Link>
  )
}
