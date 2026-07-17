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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-deep-dark/70 via-deep-dark/50 to-deep-dark" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <p className="text-accent font-medium text-sm md:text-base uppercase tracking-widest mb-4">
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-text-primary mb-6"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl lg:text-2xl font-light text-text-secondary max-w-3xl mx-auto mb-10"
        >
          A journey into the breathtaking universe hidden beneath the lens — where cells dance, organisms glow, and life reveals its most intricate beauty.
        </p>
        <a
          href="#gallery"
          className="inline-block px-8 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/20"
        >
          Begin Exploring
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
