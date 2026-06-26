import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
            Premium Industrial Machinery
          </span>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Precision Metal Folding Machines for Modern Fabrication
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
          >
            Engineered for accuracy, built for durability. Discover our range of double folding machines, sheet metal folders, and metal folding equipment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
            >
              View Products
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
    </section>
  )
}
