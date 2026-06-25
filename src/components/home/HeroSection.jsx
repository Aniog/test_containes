import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <span className="inline-block text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-6">
          — Explore the Invisible World —
        </span>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none"
        >
          Micro<span className="text-[#00d4aa]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A breathtaking journey into the hidden universe beneath our feet — where bacteria, crystals, cells, and organisms create worlds of extraordinary beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="bg-[#00d4aa] text-[#050a14] font-semibold px-8 py-4 rounded-full hover:bg-[#00ffcc] transition-colors text-base"
          >
            Explore Gallery
          </a>
          <a
            href="#categories"
            className="border border-[#00d4aa]/50 text-[#00d4aa] px-8 py-4 rounded-full hover:bg-[#00d4aa]/10 transition-colors text-base"
          >
            Discover Categories
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4aa] to-transparent" />
      </div>
    </section>
  )
}
