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
        data-strk-bg-id="hero-bg-mc7x9k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950 z-10" />

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-emerald-400 text-sm sm:text-base font-medium tracking-widest uppercase mb-4">
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          A journey into the breathtaking universe hidden beneath our eyes — where cells dance, organisms thrive, and life reveals its most intricate beauty.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#gallery"
            className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-3 border border-slate-500 hover:border-emerald-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
