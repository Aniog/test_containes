import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-6">
          Explore the Invisible
        </p>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-6"
        >
          Micro<span className="text-teal-400">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the hidden universe of microscopic life — bacteria, cells, fungi, and beyond.
        </p>
        <a
          href="#gallery"
          className="inline-block bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg shadow-teal-500/30"
        >
          Explore Now
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
