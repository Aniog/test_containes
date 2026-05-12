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
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
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
          className="text-amber-400 font-semibold tracking-widest uppercase text-sm md:text-base mb-4"
        >
          Discover the Natural World
        </p>
        <h1
          id="hero-title"
          className="font-display text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Wild World
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/85 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-10"
        >
          A breathtaking journey through the animal kingdom — from the deepest oceans to the highest peaks
        </p>
        <a
          href="#featured"
          className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explore Animals
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
