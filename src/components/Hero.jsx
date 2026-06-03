import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/70 via-cosmos-bg/50 to-cosmos-bg" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <p className="text-cosmos-cyan text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-7xl md:text-9xl font-black tracking-tight text-cosmos-text mb-6 leading-none"
        >
          Micro
          <span className="text-cosmos-cyan">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-cosmos-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the microscopic universe — where bacteria, cells, and organisms invisible to the naked eye reveal a world of extraordinary beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 bg-cosmos-cyan text-cosmos-bg font-bold rounded-full text-base hover:bg-white transition-colors duration-300"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-cosmos-cyan text-cosmos-cyan font-bold rounded-full text-base hover:bg-cosmos-cyan/10 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cosmos-dim">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-cyan to-transparent animate-pulse" />
      </div>
    </section>
  )
}
