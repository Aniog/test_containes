import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a3f9c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4"
        >
          Discover the Wonders of Nature
        </p>
        <h1
          id="hero-title"
          className="font-display text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          The Animal Kingdom
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Explore the breathtaking diversity of wildlife — from the depths of the ocean to the peaks of the mountains, every creature has a story to tell.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#featured"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 no-underline text-base shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Explore Animals
          </a>
          <a
            href="#conservation"
            className="inline-block bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full border border-white/30 transition-all duration-200 no-underline text-base backdrop-blur-sm"
          >
            Learn & Protect
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
