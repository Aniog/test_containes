import { Link } from 'react-router-dom'
import { memories, EMOTIONS, getEmotionById } from '../../data/memories'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'

const featured = memories.filter(m => m.brightness >= 0.9).slice(0, 6)

function MemoryCard({ memory, featured: isFeatured }) {
  const emotion = getEmotionById(memory.emotion)

  return (
    <Link
      to={`/explore?memory=${memory.id}`}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden group block"
    >
      {/* Emotion color bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${emotion?.color || '#818cf8'}, transparent)` }}
      />

      <div className="p-6">
        {/* Tags row */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span
            className="memory-tag"
            style={{
              background: `${emotion?.color || '#818cf8'}18`,
              border: `1px solid ${emotion?.color || '#818cf8'}35`,
              color: emotion?.color || '#818cf8',
            }}
          >
            {emotion?.icon} {emotion?.label}
          </span>
          <span className="memory-tag bg-slate-800/60 border border-slate-700/50 text-slate-400">
            {memory.era}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-white text-lg leading-tight mb-3 group-hover:text-nebula-200 transition-colors duration-200">
          {memory.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {memory.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              <span className="truncate max-w-[140px]">{memory.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-3 h-3" />
              <span>{memory.year}</span>
            </div>
          </div>
          <div className="text-nebula-400 group-hover:text-nebula-300 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedMemories() {
  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(192,132,252,0.05) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono text-memory-love tracking-widest uppercase mb-3">
              Featured Memories
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold">
              Stories That Illuminate Us
            </h2>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 text-nebula-300 hover:text-nebula-200 font-medium text-sm transition-colors duration-200 group"
          >
            View all memories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      </div>
    </section>
  )
}
