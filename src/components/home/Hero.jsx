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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 font-sans text-base md:text-lg text-white/80 max-w-lg leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-gold text-white font-sans text-xs font-medium tracking-btn uppercase px-12 py-4 hover:bg-gold-light hover:shadow-lg transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
        <div className="w-px h-10 bg-white/40 mx-auto" />
      </div>
    </section>
  )
}

export default Hero
