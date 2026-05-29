import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Clock, Shield, Zap } from 'lucide-react'
import ParticleField from './ParticleField.jsx'

const TIMELINE_EVENTS = [
  { year: '3200 BCE', label: 'First Rift Detected', dim: 'Prime-Alpha' },
  { year: '44 BCE', label: 'Caesar Paradox', dim: 'Prime-Alpha' },
  { year: '1347', label: 'Black Death Anomaly', dim: 'Theta-3' },
  { year: '1666', label: 'Great Fire Divergence', dim: 'Prime-Alpha' },
  { year: '1776', label: 'Jefferson Contact', dim: 'Prime-Alpha' },
  { year: '1847', label: 'Meridian Compass', dim: 'Prime-Alpha' },
  { year: '1888', label: 'Cassandra Recording', dim: 'Prime-Alpha' },
  { year: '1969', label: 'Apollo Incident', dim: 'Prime-Alpha' },
  { year: '2001', label: 'Archive Founded', dim: 'All Timelines' },
  { year: '2089', label: 'Final Map Created', dim: 'Sigma-7' },
  { year: '3147', label: 'Rift Stabilizer Origin', dim: 'Delta-Prime' },
]

const TYPEWRITER_TEXTS = [
  'Collecting artifacts from across all known timelines.',
  'Preserving the echoes of alternate realities.',
  'Guarding the threads that hold history together.',
  'Documenting what was, what is, and what should not be.',
]

export default function HeroSection() {
  const [typeText, setTypeText] = useState('')
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = TYPEWRITER_TEXTS[textIdx]
      if (!deleting) {
        if (charIdx < current.length) {
          setTypeText(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 2000)
        }
      } else {
        if (charIdx > 0) {
          setTypeText(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setTextIdx(i => (i + 1) % TYPEWRITER_TEXTS.length)
        }
      }
    }, deleting ? 30 : 60)
    return () => clearTimeout(timer)
  }, [charIdx, deleting, textIdx])

  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scanlines">
      {/* Deep space background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, rgba(124,58,237,0.05) 40%, #050810 70%)'
      }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <ParticleField count={80} />

      {/* Floating timeline strip */}
      <div className="absolute top-24 left-0 right-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="timeline-scroll flex items-center gap-0 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...TIMELINE_EVENTS, ...TIMELINE_EVENTS].map((ev, i) => (
            <div key={i} className="flex items-center gap-0">
              <div className="flex flex-col items-center px-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400 pulse-glow" />
                <div className="font-mono-archive text-xs text-cyan-400 mt-1">{ev.year}</div>
                <div className="text-xs text-slate-500 mt-0.5">{ev.label}</div>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-cyan-400/50 to-violet-500/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Classification badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-amber-500/30 mb-8 fade-in-up">
          <Shield className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono-archive text-xs text-amber-400 tracking-widest">CLASSIFIED — TEMPORAL DIVISION — LEVEL 1 ACCESS</span>
        </div>

        {/* Main title */}
        <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-100 leading-none mb-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
          THE TIME
          <br />
          <span className="glow-cyan text-transparent bg-clip-text" style={{
            backgroundImage: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            TRAVELER'S
          </span>
          <br />
          ARCHIVE
        </h1>

        {/* Typewriter subtitle */}
        <div className="h-8 flex items-center justify-center mb-10 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-slate-400 text-lg font-light tracking-wide cursor-blink">
            {typeText}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/archive"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-slate-900 transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)' }}
          >
            <Clock className="w-4 h-4" />
            Enter the Archive
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/timeline"
            className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-cyan-300 glass border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <Zap className="w-4 h-4" />
            Explore Timeline Map
          </Link>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '847+', label: 'Artifacts Cataloged' },
            { value: '23', label: 'Active Timelines' },
            { value: '12', label: 'Open Paradoxes' },
            { value: '∞', label: 'Dimensions Monitored' },
          ].map(({ value, label }) => (
            <div key={label} className="glass border border-cyan-400/15 rounded-lg p-4 text-center">
              <div className="font-cinzel text-2xl font-bold text-cyan-400 glow-cyan">{value}</div>
              <div className="text-xs text-slate-500 mt-1 font-mono-archive tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent, #050810)'
      }} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono-archive text-xs text-slate-500 tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent" />
      </div>
    </section>
  )
}
