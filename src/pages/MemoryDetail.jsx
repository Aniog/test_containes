import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchMemoryById, EMOTION_COLORS } from '../api/memories'

export default function MemoryDetail() {
  const { id } = useParams()
  const [memory, setMemory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchMemoryById(id)
      .then(m => { setMemory(m); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-cosmos pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-2 border-aurora border-t-transparent animate-spin mx-auto mb-4" />
          <p className="text-moonlight font-mono text-sm">Retrieving memory...</p>
        </div>
      </div>
    )
  }

  if (error || !memory) {
    return (
      <div className="min-h-screen bg-cosmos pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">✦</div>
          <h2 className="font-cinzel text-2xl text-starlight mb-2">Memory Not Found</h2>
          <p className="text-moonlight text-sm mb-6">{error || 'This memory may have been lost to time.'}</p>
          <Link to="/explore" className="text-aurora-light hover:text-aurora font-mono text-sm underline underline-offset-2">
            ← Return to Archive
          </Link>
        </div>
      </div>
    )
  }

  const d = memory.data
  const emotion = EMOTION_COLORS[d.emotion] || EMOTION_COLORS.Wonder

  return (
    <div className="min-h-screen bg-cosmos pt-20">
      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{ background: `radial-gradient(ellipse at 50% 20%, ${emotion.color}20 0%, transparent 60%)` }}
      />

      <div className="relative max-w-3xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-moonlight hover:text-starlight text-sm font-mono transition-colors duration-200 mb-8"
        >
          ← Back to Archive
        </Link>

        {/* Memory card */}
        <article className="rounded-2xl border border-stardust bg-void overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-stardust">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-sm font-mono px-4 py-1.5 rounded-full border"
                style={{ color: emotion.color, borderColor: emotion.border, backgroundColor: emotion.bg }}
              >
                {d.emotion}
              </span>
              <span className="text-xs text-twilight font-mono px-3 py-1.5 rounded-full border border-stardust">
                {d.era}
              </span>
              {d.life_event && (
                <span className="text-xs text-twilight font-mono px-3 py-1.5 rounded-full border border-stardust">
                  {d.life_event}
                </span>
              )}
            </div>

            <h1 className="font-cinzel text-2xl md:text-3xl text-starlight mb-4 leading-tight">
              {d.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-twilight font-mono">
              {d.year && <span>Year: {d.year}</span>}
              {d.location && <span>Location: {d.location}</span>}
              {d.continent && <span>Continent: {d.continent}</span>}
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            <p className="text-moonlight text-base leading-relaxed whitespace-pre-wrap">
              {d.description}
            </p>
          </div>

          {/* Tags */}
          {d.tags && d.tags.length > 0 && (
            <div className="px-8 pb-6">
              <div className="flex flex-wrap gap-2">
                {d.tags.map(tag => (
                  <span key={tag} className="text-xs text-twilight font-mono bg-stardust/50 px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contributor */}
          {d.contributor_name && (
            <div className="px-8 pb-8 pt-2 border-t border-stardust/50">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: emotion.bg, color: emotion.color, border: `1px solid ${emotion.border}` }}
                >
                  {d.contributor_name.charAt(0)}
                </div>
                <div>
                  <div className="text-starlight text-sm font-semibold">{d.contributor_name}</div>
                  {d.contributor_origin && (
                    <div className="text-twilight text-xs font-mono">{d.contributor_origin}</div>
                  )}
                </div>
              </div>
            </div>
          )}
        </article>

        {/* View count */}
        {d.view_count > 0 && (
          <div className="text-center mt-6 text-xs text-twilight font-mono">
            This memory has been viewed {d.view_count.toLocaleString()} times
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-center mt-8">
          <Link
            to="/explore"
            className="px-6 py-3 rounded-full border border-stardust text-moonlight hover:border-aurora/50 hover:text-starlight text-sm font-mono transition-all duration-200"
          >
            Explore More Memories
          </Link>
        </div>
      </div>
    </div>
  )
}
