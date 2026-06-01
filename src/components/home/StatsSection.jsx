import { useEffect, useRef, useState } from 'react'
import { STATS } from '../../data/memories'

const stats = [
  { value: STATS.totalMemories, label: 'Memories Preserved', suffix: '', format: 'millions' },
  { value: STATS.contributors, label: 'Contributors', suffix: '', format: 'millions' },
  { value: STATS.languages, label: 'Languages', suffix: '', format: 'number' },
  { value: STATS.countries, label: 'Countries', suffix: '', format: 'number' },
]

function formatNumber(n, format) {
  if (format === 'millions') {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
    if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K'
  }
  return n.toLocaleString()
}

function AnimatedCounter({ target, format, duration = 2000 }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCurrent(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(current, format)}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-nebula-400 tracking-widest uppercase mb-3">
            Archive Status — Live
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold">
            The Scale of Human Memory
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 md:p-8 text-center group hover:border-nebula-500/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                <AnimatedCounter target={stat.value} format={stat.format} />
              </div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-aurora-400 animate-pulse" />
            <span className="text-slate-300 text-sm">
              Oldest recorded memory: <span className="text-aurora-300 font-mono">{STATS.oldestMemory}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-stardust-400 animate-pulse" />
            <span className="text-slate-300 text-sm">
              Spanning <span className="text-stardust-300 font-mono">{STATS.erasCovered.toLocaleString()} years</span> of human history
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-memory-love animate-pulse" />
            <span className="text-slate-300 text-sm">
              New memories added <span className="text-memory-love font-mono">every 3 seconds</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
