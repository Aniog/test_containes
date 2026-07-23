import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a8b9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-warm-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-warm-cream tracking-wider uppercase leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-sm md:text-base text-warm-cream/70 mt-4 md:mt-6 max-w-lg mx-auto">
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold text-warm-black font-sans text-sm uppercase tracking-wider px-10 py-4 hover:bg-gold-light transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
