import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Radio } from 'lucide-react'

const timelineEvents = [
  '2847 — The Convergence Event',
  '1920 — Archive Founded',
  '500 CE — First Rift Detected',
  '2026 — Present Operations',
  '3000 BCE — Obsidian Chronometer',
  '2500 — Dimensional Travel',
  '1600 — First Paradox',
  '5000 — End of Timeline',
]

function FloatingTimeline({ index }) {
  const top = 15 + (index * 10) % 70
  const delay = index * 2.5
  const duration = 18 + (index % 3) * 4

  return (
    <div
      className="absolute whitespace-nowrap pointer-events-none"
      style={{
        top: `${top}%`,
        animation: `timelineFlow ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        opacity: 0.15 + (index % 3) * 0.1,
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-archive-glow animate-pulse-glow" />
        <div className="h-px w-16 bg-gradient-to-r from-archive-glow/50 to-transparent" />
        <span className="font-mono text-xs text-archive-glow/70">
          {timelineEvents[index % timelineEvents.length]}
        </span>
        <div className="h-px w-32 bg-gradient-to-r from-archive-glow/30 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-archive-purple/50" />
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [statusText, setStatusText] = useState('')
  const fullText = 'TEMPORAL MONITORING ACTIVE — ALL SYSTEMS NOMINAL'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setStatusText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated timeline lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <FloatingTimeline key={i} index={i} />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        {/* Status bar */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-archive-glow/20 bg-archive-surface/40 backdrop-blur-sm mb-8">
          <Radio className="w-3 h-3 text-archive-emerald animate-pulse" />
          <span className="font-mono text-xs text-archive-emerald">
            {statusText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-archive-text mb-6 leading-tight">
          <span className="block">The Time Traveler's</span>
          <span className="block gradient-text glow-text">Archive</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-archive-muted max-w-2xl mx-auto mb-4 font-light">
          A classified repository of artifacts, recordings, and anomalies
          collected across centuries and alternate timelines.
        </p>

        {/* Classification notice */}
        <div className="font-mono text-xs text-archive-amber/70 mb-10 tracking-wider">
          ⚠ CLASSIFICATION LEVEL: RESTRICTED — AUTHORIZED PERSONNEL ONLY
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/archive"
            className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-archive-glow/10 border border-archive-glow/40 text-archive-glow font-medium hover:bg-archive-glow/20 hover:border-archive-glow/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] no-underline"
          >
            Enter the Archive
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/timeline"
            className="flex items-center gap-2 px-8 py-4 rounded-lg border border-archive-border/50 text-archive-text font-medium hover:border-archive-purple/40 hover:text-archive-purple transition-all duration-300 no-underline"
          >
            Explore Timelines
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: '2,847', label: 'Artifacts Secured' },
            { value: '142', label: 'Active Timelines' },
            { value: '8', label: 'Known Dimensions' },
            { value: '23', label: 'Open Paradoxes' },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel p-4">
              <div className="font-cinzel text-2xl font-bold text-archive-glow">{stat.value}</div>
              <div className="font-mono text-[10px] text-archive-muted uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-archive-bg to-transparent" />
    </section>
  )
}
