import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-3f8a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-emerald-400 uppercase tracking-widest text-sm font-semibold mb-4"
        >
          Nature's Giants
        </p>

        <h1
          id="hero-title"
          className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          The Ancient World of Trees
        </h1>

        <p
          id="hero-subtitle"
          className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Towering forests, ancient redwoods, and whispering canopies — trees are the
          lungs of our planet and the keepers of time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
            Explore the Forest
          </button>
          <button className="border border-white/60 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 hover:bg-white/10">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}

export default HeroSection
