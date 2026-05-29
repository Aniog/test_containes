import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, ChevronRight, Loader2 } from 'lucide-react'
import { fetchFeaturedArtifacts } from '../../api/archive.js'
import ArtifactCard from '../archive/ArtifactCard.jsx'

export default function FeaturedSection() {
  const [artifacts, setArtifacts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedArtifacts()
      .then(setArtifacts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="font-mono-archive text-xs text-amber-400 tracking-widest uppercase">Featured Discoveries</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100">
            Recently Recovered
          </h2>
          <p className="text-slate-500 mt-2 max-w-lg">
            The most significant artifacts recovered by our field agents across all known timelines.
          </p>
        </div>
        <Link
          to="/archive"
          className="hidden sm:flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Full Archive <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map(artifact => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      )}

      <div className="mt-8 text-center sm:hidden">
        <Link to="/archive" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
          View Full Archive <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
