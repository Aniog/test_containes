import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Sparkles } from 'lucide-react'
import ConstellationCanvas from './ConstellationCanvas'
import { EMOTIONS } from '../../data/memories'

export default function Hero() {
  const [hoveredMemory, setHoveredMemory] = useState(null)

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden star-bg">
      {/* Nebula atmosphere layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: 'radial-gradient(ellipse at 25% 30%, rgba(99,102,241,0.12) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(20,184,166,0.08) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(192,132,252,0.06) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* Constellation canvas */}
      <div className="absolute inset-0">
        <ConstellationCanvas
          onMemoryHover={setHoveredMemory}
          onMemoryClick={(mem) => {
            window.location.href = `/explore?memory=${mem.id}`
          }}
        />
      </div>

      {/* Center content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-nebula-900/60 border border-nebula-500/30 backdrop-blur-sm mb-8 pointer-events-auto">
          <Sparkles className="w-3.5 h-3.5 text-nebula-400" />
          <span className="text-xs font-mono text-nebula-300 tracking-widest uppercase">
            Global Memory Initiative — Est. 2071
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight max-w-4xl">
          Every Memory{' '}
          <span className="text-gradient-nebula italic">Deserves</span>
          <br />
          to Survive
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          Before humanity crosses the stars, we preserve what makes us human.
          Explore millions of memories — moments of joy, sorrow, wonder, and love —
          from every corner of Earth, across fifty thousand years of history.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
          <Link
            to="/explore"
            className="px-8 py-3.5 rounded-lg bg-nebula-600 hover:bg-nebula-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-nebula-900/50 hover:shadow-nebula-600/30"
          >
            Explore the Archive
          </Link>
          <Link
            to="/about"
            className="px-8 py-3.5 rounded-lg border border-nebula-500/40 text-nebula-200 hover:border-nebula-400 hover:text-white font-medium text-base transition-all duration-200 backdrop-blur-sm"
          >
            Learn the Mission
          </Link>
        </div>

        {/* Emotion legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 pointer-events-auto">
          {EMOTIONS.slice(0, 6).map(emotion => (
            <Link
              key={emotion.id}
              to={`/explore?emotion=${emotion.id}`}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: `${emotion.color}18`,
                border: `1px solid ${emotion.color}40`,
                color: emotion.color,
              }}
            >
              <span>{emotion.icon}</span>
              {emotion.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hovered memory preview */}
      {hoveredMemory && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 max-w-sm w-full mx-4 pointer-events-none">
          <div className="glass-card rounded-xl p-4 animate-fade-in">
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: EMOTIONS.find(e => e.id === hoveredMemory.emotion)?.color || '#818cf8' }}
              />
              <div>
                <p className="text-white font-display font-semibold text-sm leading-tight mb-1">
                  {hoveredMemory.title}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {hoveredMemory.excerpt}
                </p>
                <p className="text-slate-500 text-xs mt-1.5 font-mono">
                  {hoveredMemory.location} · {hoveredMemory.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
