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
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d12]/60 via-[#050d12]/40 to-[#050d12]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-6"
        >
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-black tracking-tight text-[#f0faf8] mb-6 leading-tight"
        >
          Micro<span className="text-[#00d4aa]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-[#94b8b0] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A breathtaking journey into the hidden universe beneath our feet — where microscopic organisms, cells, and crystals reveal a world of extraordinary beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-3 rounded-full bg-[#00d4aa] text-[#050d12] font-semibold text-sm tracking-wide hover:bg-[#7df9e8] transition-all duration-300 shadow-[0_0_30px_rgba(0,212,170,0.4)]"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full border border-[#00d4aa]/40 text-[#00d4aa] font-semibold text-sm tracking-wide hover:border-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#4a7a72]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#00d4aa]/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
