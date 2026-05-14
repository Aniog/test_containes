import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-stone-950">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="horse-hero-bg-4f8a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber-400" />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
              Est. 1892
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Born to
            <br />
            <span className="text-amber-400">Run Free</span>
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-stone-300 leading-relaxed mb-10 max-w-lg"
          >
            Experience the majesty of thoroughbred horses in their natural element.
            Where power, grace, and freedom come together on the open range.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-base rounded-none uppercase tracking-wider transition-colors duration-200">
              Explore Our Horses
            </button>
            <button className="px-8 py-4 border border-white/50 hover:border-white text-white font-semibold text-base rounded-none uppercase tracking-wider transition-colors duration-200 hover:bg-white/10">
              Watch the Story
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 mt-16 pt-10 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-stone-400 text-sm mt-1 uppercase tracking-wide">Horses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50 ac</p>
              <p className="text-stone-400 text-sm mt-1 uppercase tracking-wide">Open Land</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">130+</p>
              <p className="text-stone-400 text-sm mt-1 uppercase tracking-wide">Years Legacy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-stone-400 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-stone-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

export default HeroSection
