import { useState, useEffect } from 'react'
import { Cpu, ChevronDown } from 'lucide-react'

const words = ['Intelligence', 'Innovation', 'Revolution', 'Future']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % words.length)
        setFade(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-700/15 blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-8 text-purple-300 text-sm font-medium">
          <Cpu className="w-4 h-4" />
          The Age of Artificial Intelligence
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          The Power of
          <br />
          <span
            className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent"
            style={{ transition: 'opacity 0.4s', opacity: fade ? 1 : 0 }}
          >
            Artificial {words[wordIndex]}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore how AI is reshaping the world — from how we work and communicate,
          to how we solve humanity's greatest challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#what-is-ai"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/40"
          >
            Explore AI
          </a>
          <a
            href="#timeline"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
          >
            View Timeline
          </a>
        </div>
      </div>

      <a href="#what-is-ai" className="absolute bottom-10 animate-bounce text-gray-500 hover:text-gray-300 transition-colors">
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  )
}
