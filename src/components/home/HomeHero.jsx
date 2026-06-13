import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-navy">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-block text-gold text-xs lg:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Precision Engineering
          </span>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Sheet Metal Folding Machines Built to Last
          </h1>
          <p
            id="hero-subtitle"
            className="text-base lg:text-lg text-white/60 leading-relaxed mb-8 max-w-xl"
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines engineered for accuracy, durability, and effortless operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm lg:text-base"
            >
              Explore Our Machines
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors text-sm lg:text-base"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}