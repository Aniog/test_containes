import { EMOTION_COLORS } from '../../api/memories.js'
import { MapPin, Calendar, Eye } from 'lucide-react'

export default function MemoryCard({ memory, onClick }) {
  const d = memory?.data ?? {}
  const color = EMOTION_COLORS[d.emotion] || '#4f8ef7'

  return (
    <div
      className="group relative rounded-xl border border-white/10 bg-[#080d1a] hover:border-white/20 hover:bg-[#0d1530] transition-all duration-300 cursor-pointer overflow-hidden"
      style={{ boxShadow: `0 0 0 0 ${color}00` }}
      onClick={() => onClick && onClick(memory)}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${color}15`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 0 ${color}00`
      }}
    >
      {/* Emotion color bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${color}80, transparent)` }} />

      <div className="p-5">
        {/* Emotion + Life Event badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className="text-xs font-medium rounded-full px-2.5 py-0.5 border"
            style={{ color, borderColor: `${color}40`, background: `${color}15` }}
          >
            {d.emotion}
          </span>
          <span className="text-xs rounded-full px-2.5 py-0.5 border border-white/10 bg-white/5 text-slate-400">
            {d.life_event}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-base font-semibold text-white leading-snug mb-2 group-hover:text-slate-100 line-clamp-2">
          {d.title}
        </h3>

        {/* Description preview */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {d.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            {(d.location_city || d.location_country) && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {d.location_city ? `${d.location_city}, ` : ''}{d.location_country}
              </span>
            )}
            {d.year && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {d.year}
              </span>
            )}
          </div>
          {d.view_count > 0 && (
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {d.view_count.toLocaleString()}
            </span>
          )}
        </div>

        {/* Contributor */}
        {d.contributor_name && (
          <div className="mt-3 pt-3 border-t border-white/5 text-xs text-slate-500">
            Shared by <span className="text-slate-400">{d.contributor_name}</span>
            {d.contributor_age && <span>, age {d.contributor_age}</span>}
          </div>
        )}
      </div>
    </div>
  )
}
