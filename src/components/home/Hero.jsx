import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-a3f2e1"
        data-strk-bg="[hero-subtitle] [hero-title] luxury gold jewelry on model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black/80" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-sm font-sans tracking-mega-wide uppercase text-brand-gold mb-6">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-display font-light text-brand-cream leading-tight mb-6"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-brand-cream/80 font-light leading-relaxed mb-10 max-w-lg"
          >
            Discover our collection of 18K gold-plated jewelry, designed for the modern woman
            who values timeless elegance and everyday luxury.
          </p>
          <Link
            to="/collection"
            className="inline-block px-10 py-4 bg-brand-gold text-brand-black font-sans text-sm font-semibold tracking-wider uppercase hover:bg-brand-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-brand-cream/30" />
      </div>
    </section>
  )
}
