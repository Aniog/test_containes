import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-3f8a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b2e22]/70 via-[#1b2e22]/50 to-[#1b2e22]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow label */}
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#52b788]/20 border border-[#52b788]/40 text-[#b7e4c7] text-sm font-medium tracking-widest uppercase">
          Nature &amp; Life
        </span>

        {/* Main heading */}
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#f0faf4] leading-tight mb-6"
        >
          The Ancient World
          <br />
          <span className="text-[#52b788]">of Trees</span>
        </h1>

        {/* Subheading */}
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl font-light text-[#a8d5b5] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Towering giants, silent witnesses to centuries of history — trees are
          the lungs of our planet and the heart of every forest.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-full bg-[#2d6a4f] hover:bg-[#52b788] text-[#f0faf4] font-semibold text-base transition-colors duration-300 shadow-lg">
            Explore the Forest
          </button>
          <button className="px-8 py-3.5 rounded-full border border-[#52b788]/60 hover:border-[#52b788] text-[#b7e4c7] hover:text-[#f0faf4] font-semibold text-base transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-[#a8d5b5]/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#52b788]/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
