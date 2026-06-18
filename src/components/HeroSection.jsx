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
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0e]/60 via-[#050a0e]/40 to-[#050a0e]" />

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
          className="text-6xl md:text-8xl font-black tracking-tight text-sky-50 leading-none mb-6"
        >
          Micro<span className="text-[#00d4aa]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the microscopic universe — where bacteria, cells,
          and organisms reveal the hidden architecture of life itself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 bg-[#00d4aa] text-[#050a0e] font-bold rounded-2xl hover:bg-[#00d4aa]/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,212,170,0.4)]"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-[#00d4aa]/40 text-sky-50 font-semibold rounded-2xl hover:border-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4aa]/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
