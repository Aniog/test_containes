import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchFeaturedMemories, EMOTION_COLORS } from '../../api/memories'

function MemoryCard({ memory, index }) {
  const d = memory.data
  const emotion = EMOTION_COLORS[d.emotion] || EMOTION_COLORS.Wonder

  return (
    <Link
      to={`/memory/${memory.id}`}
      className="group block rounded-xl border border-stardust bg-void hover:border-aurora/40 transition-all duration-300 hover:shadow-xl hover:shadow-aurora/10 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        {/* Emotion badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-mono px-3 py-1 rounded-full border"
            style={{ color: emotion.color, borderColor: emotion.border, backgroundColor: emotion.bg }}
          >
            {d.emotion}
          </span>
          <span className="text-xs text-twilight font-mono">{d.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-starlight font-semibold text-base mb-3 leading-snug group-hover:text-aurora-light transition-colors duration-200 line-clamp-2">
          {d.title}
        </h3>

        {/* Excerpt */}
        <p className="text-moonlight text-sm leading-relaxed line-clamp-3 mb-4">
          {d.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-twilight font-mono">
          <span>{d.location || d.contributor_origin || '—'}</span>
          <span>{d.life_event}</span>
        </div>

        {/* Contributor */}
        {d.contributor_name && (
          <div className="mt-3 pt-3 border-t border-stardust/50 text-xs text-twilight">
            — {d.contributor_name}
          </div>
        )}
      </div>
    </Link>
  )
}

export default function FeaturedMemories() {
  const [memories, setMemories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedMemories()
      .then(rows => { setMemories(rows); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="py-24 px-4 bg-cosmos">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-nova/30 bg-nova/10">
            <span className="w-2 h-2 rounded-full bg-nova animate-pulse" />
            <span className="text-xs font-mono text-nova-light tracking-widest uppercase">Featured Memories</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl text-starlight mb-4">
            Stories That Define Us
          </h2>
          <p className="text-moonlight max-w-xl mx-auto">
            From the fields of Punjab to the streets of Buenos Aires — these are the moments humanity chose to remember.
          </p>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-stardust bg-void p-6 animate-pulse">
                <div className="h-4 bg-stardust rounded mb-4 w-1/3" />
                <div className="h-5 bg-stardust rounded mb-3 w-4/5" />
                <div className="h-4 bg-stardust rounded mb-2 w-full" />
                <div className="h-4 bg-stardust rounded mb-2 w-5/6" />
                <div className="h-4 bg-stardust rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, i) => (
              <MemoryCard key={memory.id} memory={memory} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stardust text-moonlight hover:border-aurora/50 hover:text-starlight font-semibold transition-all duration-200"
          >
            View All Memories
            <span className="text-aurora-light">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
