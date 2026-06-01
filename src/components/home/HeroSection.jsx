import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import ParticleField from '@/components/shared/ParticleField'

const timelineYears = [
  { year: '1888', label: 'Victorian Era', x: 10, delay: 0 },
  { year: '1947', label: 'Roswell', x: 25, delay: 1 },
  { year: '2026', label: 'Present', x: 45, delay: 2 },
  { year: '2089', label: 'Near Future', x: 65, delay: 3 },
  { year: '3000', label: 'Deep Future', x: 85, delay: 4 },
]

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <ParticleField count={60} />

      {/* Animated timeline lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent animate-drift"
            style={{
              top: `${20 + i * 15}%`,
              width: '200%',
              animationDuration: `${15 + i * 5}s`,
              animationDelay: `${i * 3}s`,
              opacity: 0.3 + i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Floating timeline markers */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {timelineYears.map((item, i) => (
          <div
            key={item.year}
            className={`absolute transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              left: `${item.x}%`,
              top: `${30 + (i % 2 === 0 ? 0 : 20)}%`,
              transitionDelay: `${item.delay * 300 + 500}ms`,
              animation: `float ${6 + i}s ease-in-out ${i * 0.5}s infinite`,
            }}
          >
            <div className="glass-panel px-3 py-2 text-center">
              <p className="text-cyan font-mono text-sm font-bold">{item.year}</p>
              <p className="text-white/40 text-xs">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/5 border border-cyan/20 mb-8">
            <Zap className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono text-cyan/80 tracking-wider">CLEARANCE LEVEL: PUBLIC ACCESS</span>
          </div>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-white">The Time Traveler's</span>
          <br />
          <span className="text-gradient-cyan">Archive</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          A classified repository of artifacts, recordings, and anomalies collected across centuries and alternate timelines.
        </p>

        <p
          className={`text-sm text-white/30 font-mono mb-10 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          EST. 1900 • 200+ CATALOGUED ARTIFACTS • 8 KNOWN DIMENSIONS
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Link
            to="/archive"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan/10 border border-cyan/30 text-cyan font-semibold text-sm hover:bg-cyan/20 hover:border-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
          >
            Enter the Archive
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/timeline"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/70 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Explore Timeline
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { value: '200+', label: 'Artifacts' },
            { value: '8', label: 'Dimensions' },
            { value: '47', label: 'Active Agents' },
            { value: '3', label: 'Paradoxes' },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel p-4 text-center">
              <p className="text-2xl font-bold text-cyan font-mono">{stat.value}</p>
              <p className="text-xs text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  )
}

export default HeroSection
