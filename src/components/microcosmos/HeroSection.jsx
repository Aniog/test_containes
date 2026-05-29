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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          Explore the Invisible World
        </span>
        <h1 id="hero-title" className="text-7xl md:text-9xl font-black tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent leading-none">
          MicroCosmos
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A breathtaking journey into the microscopic universe hidden all around us — where life thrives in forms beyond imagination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#explore" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-full transition-colors text-lg">
            Begin Exploring
          </a>
          <a href="#gallery" className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-full transition-colors text-lg">
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  )
}
