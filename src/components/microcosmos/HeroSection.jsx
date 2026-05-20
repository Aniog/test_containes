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
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p id="hero-label" className="text-sm uppercase tracking-widest text-[#00d4c8] mb-6 font-medium">
          Explore the Invisible World
        </p>
        <h1 id="hero-title" className="text-6xl md:text-8xl font-black text-slate-50 tracking-tight mb-6 leading-none">
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          A breathtaking journey into the microscopic universe — where bacteria, cells, and organisms reveal the hidden beauty of life itself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 bg-[#00d4c8] text-[#050d1a] font-bold rounded-full text-base hover:bg-[#00b4d8] transition-colors duration-300"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-[#00d4c8]/50 text-[#00d4c8] font-semibold rounded-full text-base hover:bg-[#00d4c8]/10 transition-colors duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4c8] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
