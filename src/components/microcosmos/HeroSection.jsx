import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-950/70 z-10" />

      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">
          Explore the Invisible World
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
          Welcome to <span className="text-teal-400">MicroCosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          A journey into the breathtaking microscopic universe — where cells, organisms, and patterns reveal the hidden beauty of life at its smallest scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('#gallery')}
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
          >
            Explore Gallery
          </button>
          <button
            onClick={() => scrollToSection('#about')}
            className="border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-4 rounded-full transition-colors text-lg"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
