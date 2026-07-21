import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 img-zoom-in"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry model closeup"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight hero-animate"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 font-sans font-light max-w-xl mx-auto leading-relaxed hero-animate-delay-1"
        >
          Demi-fine gold jewelry designed for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 sm:mt-10 px-10 py-3.5 bg-velmora-gold text-white text-sm tracking-wider uppercase font-sans hover:bg-velmora-gold-hover hover:shadow-lg hover:shadow-velmora-gold/20 transition-all duration-300 hero-animate-delay-2"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-animate-delay-3">
        <div className="w-px h-12 bg-white/30 mx-auto">
          <div className="w-px h-4 bg-white/80 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
