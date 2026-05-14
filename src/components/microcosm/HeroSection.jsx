import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-deep/70 via-deep/50 to-deep" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-cyan-glow font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium"
        >
          Explore the invisible universe
        </p>
        <h1
          id="hero-title"
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-8"
        >
          Micro
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-violet-glow">
            cosm
          </span>
        </h1>
        <p className="font-body text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          A world beyond the naked eye — where cells dance, crystals grow, and life pulses
          in forms too small to see yet too magnificent to ignore.
        </p>
        <a
          href="#intro"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cyan-glow/40 text-cyan-glow font-body font-medium hover:bg-cyan-glow/10 transition-all duration-300"
        >
          Begin the Journey
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cyan-glow/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-glow rounded-full" />
        </div>
      </div>
    </section>
  )
}
