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
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/30">
          🐾 Your guide to dogs & cats
        </div>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Paws &amp; Whiskers
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow">
          Celebrating the love, joy, and companionship of dogs and cats — our most beloved furry friends.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#dogs"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg shadow-lg"
          >
            🐶 Meet the Dogs
          </a>
          <a
            href="#cats"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg shadow-lg"
          >
            🐱 Meet the Cats
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
