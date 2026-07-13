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
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-dark/70 via-cosmos-dark/50 to-cosmos-dark" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <p className="text-cosmos-cyan font-medium text-sm md:text-base uppercase tracking-widest mb-4">
          Explore the Invisible
        </p>
        <h1
          id="hero-title"
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cosmos-text tracking-tight mb-6"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-cosmos-muted max-w-2xl mx-auto leading-relaxed"
        >
          A journey into the breathtaking world hidden beneath our eyes — where cells dance, organisms thrive, and life begins at the smallest scale.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#gallery"
            className="inline-block px-8 py-3 bg-cosmos-cyan text-cosmos-dark font-semibold rounded-full hover:shadow-lg hover:shadow-cosmos-cyan/30 transition-all duration-300"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-3 border border-cosmos-border text-cosmos-text font-medium rounded-full hover:border-cosmos-cyan/50 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
