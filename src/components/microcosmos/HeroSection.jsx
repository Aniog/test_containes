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
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0e]/70 via-[#050a0e]/50 to-[#050a0e]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
          <span className="text-[#00d4aa] text-sm font-medium tracking-widest uppercase">Explore the Invisible World</span>
        </div>
        <h1 id="hero-title" className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none">
          Micro<span className="text-[#00d4aa]">Cosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Journey into the breathtaking universe hidden beneath the lens — where cells dance, crystals bloom, and life reveals its most astonishing secrets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 bg-[#00d4aa] text-[#050a0e] font-bold rounded-full text-lg hover:bg-[#00bfa0] transition-colors shadow-[0_0_30px_rgba(0,212,170,0.4)]"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-slate-600 text-slate-200 font-semibold rounded-full text-lg hover:border-[#00d4aa] hover:text-[#00d4aa] transition-colors"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  )
}
