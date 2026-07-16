import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[85vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a7c3e1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <p className="text-gold-400 text-xs tracking-wide-xl uppercase font-medium mb-4 animate-fade-in">
            New Collection 2026
          </p>
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 leading-tight mb-4 animate-fade-in-up"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream-300 text-sm md:text-base leading-relaxed mb-8 max-w-md animate-fade-in-up animation-delay-200"
          >
            Discover demi-fine jewelry designed for the modern woman. 
            18K gold plated, hypoallergenic, and made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold-500 text-charcoal-900 px-8 py-3.5 text-xs tracking-nav uppercase font-semibold hover:bg-gold-400 transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-400"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-cream-300/60 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream-300/60 to-transparent" />
      </div>
    </section>
  )
}
