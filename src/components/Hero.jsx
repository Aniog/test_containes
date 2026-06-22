import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]" />

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-10 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,212,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124,58,237,0.15) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          Explore the Invisible World
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          The Hidden
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
            MicroCosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking world invisible to the naked eye — where bacteria, cells, crystals, and organisms reveal nature's most extraordinary artistry under the microscope.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full bg-[#00d4ff] text-[#050d1a] font-bold text-base hover:bg-[#00d4ff]/90 transition-all duration-200 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            View Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white/10 transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
