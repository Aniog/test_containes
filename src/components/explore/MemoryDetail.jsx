import { useEffect } from 'react'
import { X, MapPin, Calendar, User, Tag, Archive, ExternalLink } from 'lucide-react'
import { getEmotionById, getEraById, getLifeEventById, memories } from '../../data/memories'
import MemoryCard from './MemoryCard'

export default function MemoryDetail({ memory, onClose, onNavigate }) {
  const emotion = getEmotionById(memory.emotion)
  const era = getEraById(memory.era)
  const lifeEvent = getLifeEventById(memory.lifeEvent)

  const relatedMemories = memory.connections
    ?.map(id => memories.find(m => m.id === id))
    .filter(Boolean)
    .slice(0, 3) || []

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-nebula-800/50 shadow-2xl shadow-black/50">
        {/* Emotion color header */}
        <div
          className="h-1.5 w-full rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, ${emotion?.color || '#818cf8'}, ${emotion?.color || '#818cf8'}40, transparent)`,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {emotion && (
              <span
                className="memory-tag"
                style={{
                  background: `${emotion.color}20`,
                  border: `1px solid ${emotion.color}40`,
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
            {lifeEvent && (
              <span className="memory-tag bg-aurora-900/30 border border-aurora-500/30 text-aurora-300">
                {lifeEvent.label}
              </span>
            )}
            {memory.memoryType === 'migration' && (
              <span className="memory-tag bg-nebula-900/50 border border-nebula-500/30 text-nebula-300">
                Migration Era
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl leading-tight mb-6">
            {memory.title}
          </h2>

          {/* Full text */}
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-slate-200 text-base md:text-lg leading-relaxed font-body italic border-l-2 border-nebula-500/40 pl-5">
              "{memory.fullText}"
            </p>
          </div>

          {/* Contributor */}
          {memory.contributor && (
            <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="w-10 h-10 rounded-full bg-nebula-900/60 border border-nebula-500/30 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-nebula-400" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">{memory.contributor}</p>
                {memory.contributorAge && (
                  <p className="text-slate-400 text-xs">
                    Age {memory.contributorAge} at time of submission
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Metadata grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <MetaItem icon={MapPin} label="Location" value={memory.location} />
            <MetaItem icon={Calendar} label="Year" value={memory.year} />
            <MetaItem icon={Tag} label="Region" value={memory.region} />
            <MetaItem icon={Archive} label="Archive ID" value={memory.archiveId} mono />
            <MetaItem icon={Calendar} label="Verified" value={memory.verifiedAt} />
            <MetaItem icon={Tag} label="Type" value={memory.memoryType} />
          </div>

          {/* Tags */}
          {memory.tags?.length > 0 && (
            <div className="mb-8">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {memory.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-slate-800/60 border border-slate-700/50 text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related memories */}
          {relatedMemories.length > 0 && (
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
                Connected Memories
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedMemories.slice(0, 2).map(rel => (
                  <MemoryCard
                    key={rel.id}
                    memory={rel}
                    onClick={onNavigate}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function MetaItem({ icon: Icon, label, value, mono }) {
  return (
    <div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="w-3 h-3 text-slate-500" />
        <span className="text-xs text-slate-500 uppercase tracking-wide font-mono">{label}</span>
      </div>
      <p className={`text-slate-200 text-sm font-medium ${mono ? 'font-mono' : ''}`}>
        {value}
      </p>
    </div>
  )
}
