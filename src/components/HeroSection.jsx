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
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-[#050d1a]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="inline-block bg-[#00e5c8]/10 text-[#00e5c8] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
          Explore the Invisible World
        </span>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-bold text-sky-50 tracking-tight mb-6 leading-none"
        >
          Micro<span className="text-[#00e5c8]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          A breathtaking journey into the hidden universe that exists beyond the limits of the naked eye — teeming with life, color, and wonder.
        </p>
        <a
          href="#explore"
          className="inline-block bg-[#00e5c8] text-[#050d1a] font-bold px-8 py-4 rounded-full text-base hover:bg-cyan-300 transition-colors"
        >
          Begin Exploring
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  )
}
