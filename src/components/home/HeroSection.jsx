import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ConstellationCanvas from './ConstellationCanvas'
import { fetchFeaturedMemories } from '../../api/memories'

const COUNTER_TARGETS = [
  { label: 'Memories Preserved', value: 2847391, suffix: '' },
  { label: 'Nations Represented', value: 194, suffix: '' },
  { label: 'Years of History', value: 5000, suffix: '+' },
  { label: 'Days Until Migration', value: 847, suffix: '' },
]

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const timer = setTimeout(() => requestAnimationFrame(tick), 300)
    return () => clearTimeout(timer)
  }, [target, duration])

  return (
    <span className="font-mono text-aurora-light">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function HeroSection() {
  const [memories, setMemories] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchFeaturedMemories()
      .then(rows => {
        setMemories(rows)
        setLoaded(true)
      })
      .catch(() => setLoaded(true))
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cosmos">
      {/* Constellation background */}
      <div className="absolute inset-0">
        <ConstellationCanvas memories={memories} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos/20 via-transparent to-cosmos pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-aurora/30 bg-aurora/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-aurora animate-pulse" />
          <span className="text-xs font-mono text-aurora-light tracking-widest uppercase">
            Global Memory Initiative — Est. 2026
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-starlight mb-6 leading-tight">
          <span className="block">Before We</span>
          <span className="block bg-gradient-to-r from-aurora-light via-nova-light to-aurora-light bg-clip-text text-transparent">
            Leave the Stars
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-moonlight text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Every human life is a universe of moments. As humanity prepares for the Great Migration,
          we are preserving the memories that made us who we are.
        </p>
        <p className="text-twilight text-base max-w-xl mx-auto mb-12">
          Explore millions of recorded memories — organized by era, location, emotion, and life event.
          Add yours before we depart.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            to="/explore"
            className="px-8 py-4 rounded-full bg-aurora hover:bg-aurora-light text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-aurora/30 hover:shadow-aurora/50 hover:scale-105"
          >
            Explore the Archive
          </Link>
          <Link
            to="/submit"
            className="px-8 py-4 rounded-full border border-stardust text-moonlight hover:border-aurora/50 hover:text-starlight font-semibold text-base transition-all duration-200 backdrop-blur-sm"
          >
            Contribute a Memory
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {COUNTER_TARGETS.map(({ label, value, suffix }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">
                {loaded ? <AnimatedCounter target={value} suffix={suffix} /> : (
                  <span className="font-mono text-aurora-light">—</span>
                )}
              </div>
              <div className="text-xs text-twilight font-mono uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-twilight font-mono tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-twilight to-transparent" />
      </div>
    </section>
  )
}
