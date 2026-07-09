import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Microscope, ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f14]/80 via-[#0a0f14]/60 to-[#0a0f14]" />
      <div className="absolute inset-0 bg-[#0a0f14]/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#e8eef4]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1f2c3a] bg-[#111922]/70 backdrop-blur-sm mb-8">
          <Microscope className="w-4 h-4 text-[#4ade80]" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8a9aab]">
            The Hidden World
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          MicroCosmos
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-[#cbd5e1] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          A journey into the living universe too small to see, where a single
          drop of pond water holds more life than a rainforest.
        </p>

        <a
          href="#specimens"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4ade80] text-[#0a0f14] font-semibold hover:bg-[#22d3ee] transition-colors duration-300"
        >
          Begin the Descent
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#8a9aab] text-xs tracking-[0.2em] uppercase">
        Scroll to explore
      </div>
    </section>
  )
}
