import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="explore"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc-7f3a1b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-16">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400 text-xs font-medium uppercase tracking-widest">
          The Invisible World
        </span>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-6"
        >
          Micro
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            Cosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking universe hidden beneath the lens —
          where cells dance, crystals bloom, and life reveals its most
          extraordinary secrets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full bg-teal-400 text-gray-950 font-semibold text-base hover:bg-teal-300 transition-colors duration-200"
          >
            View Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 font-semibold text-base hover:border-teal-400 hover:text-teal-400 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}
