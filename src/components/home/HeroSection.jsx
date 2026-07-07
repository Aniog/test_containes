import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-headline] [hero-sub] luxury gold jewelry editorial photography warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="text-xs tracking-mega-wide uppercase font-sans font-medium text-white/80 mb-4 sm:mb-5">
          Demi-fine jewelry collection
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-5 sm:mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p id="hero-sub" className="font-sans text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Premium 18K gold-plated jewelry, designed for everyday elegance.
          Hypoallergenic. Timeless.
        </p>
        <Link
          to="/collection"
          className="inline-block bg-velmora-gold text-white px-10 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-all duration-300 hover:shadow-lg"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-white/30 mx-auto mb-2" />
        <p className="text-[10px] tracking-widest uppercase text-white/50 font-sans">Scroll</p>
      </div>
    </section>
  )
}
