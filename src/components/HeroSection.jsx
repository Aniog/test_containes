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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-[#1a2e1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p id="hero-subtitle" className="text-amber-400 font-semibold tracking-widest uppercase text-sm md:text-base mb-4">
          Discover the Wild
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold text-[#f5f0e8] mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Wonders of the<br />
          <span className="text-amber-400">Animal Kingdom</span>
        </h1>
        <p className="text-lg md:text-xl text-[#d4cfc5] max-w-2xl mx-auto mb-10 leading-relaxed">
          From the depths of the ocean to the peaks of the mountains, explore the incredible diversity of life that shares our planet.
        </p>
        <a
          href="#gallery"
          className="inline-block bg-amber-400 text-[#1a2e1a] font-bold px-8 py-4 rounded-full text-lg hover:bg-amber-300 transition-colors duration-300 shadow-lg"
        >
          Explore Animals
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-amber-400/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
