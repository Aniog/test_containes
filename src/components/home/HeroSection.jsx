import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc7x9a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950 z-10" />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <p className="text-emerald-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
          Explore the Invisible
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          MicroCosmos
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          A journey into the breathtaking world of microscopic organisms, cells, and structures that exist beyond the reach of the naked eye
        </p>
        <a
          href="#gallery"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
        >
          Begin Exploration
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20" />
    </section>
  )
}

export default HeroSection
