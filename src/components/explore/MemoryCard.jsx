import { Link } from 'react-router-dom'
import { MapPin, Calendar, User, ArrowRight } from 'lucide-react'
import { getEmotionById, getEraById } from '../../data/memories'

export default function MemoryCard({ memory, onClick }) {
  const emotion = getEmotionById(memory.emotion)
  const era = getEraById(memory.era)

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault()
      onClick(memory)
    }
  }

  return (
    <div
      onClick={handleClick}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Emotion color bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${emotion?.color || '#818cf8'} 0%, ${emotion?.color || '#818cf8'}40 60%, transparent 100%)`,
        }}
      />

      <div className="p-5 md:p-6">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {emotion && (
            <span
              className="memory-tag"
              style={{
                background: `${emotion.color}18`,
                border: `1px solid ${emotion.color}35`,
                color: emotion.color,
              }}
            >
              {emotion.icon} {emotion.label}
            </span>
          )}
          {era && (
            <span
              className="memory-tag"
              style={{
                background: `${era.color}15`,
                border: `1px solid ${era.color}30`,
                color: era.color,
              }}
            >
              {era.label}
            </span>
          )}
          {memory.memoryType === 'migration' && (
            <span className="memory-tag bg-nebula-900/60 border border-nebula-500/30 text-nebula-300">
              Migration Era
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-white text-base md:text-lg leading-tight mb-2 group-hover:text-nebula-200 transition-colors duration-200 line-clamp-2">
          {memory.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {memory.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/50">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{memory.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar className="w-3 h-3" />
                <span>{memory.year}</span>
              </div>
              {memory.contributor && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <User className="w-3 h-3" />
                  <span className="truncate max-w-[100px]">{memory.contributor.split(' ')[0]}</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-nebula-500 group-hover:text-nebula-300 transition-colors ml-3">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Archive ID */}
        <p className="text-slate-600 text-xs font-mono mt-2">{memory.archiveId}</p>
      </div>
    </div>
  )
}
