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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-deepCharcoal"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-deepCharcoal/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl font-light text-textLight leading-tight tracking-wide">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-base md:text-lg text-textLight/80 mt-6 leading-relaxed max-w-xl mx-auto">
          Demi-fine gold jewelry designed for everyday elegance. Warm, refined, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 font-sans text-sm tracking-[0.1em] uppercase font-medium bg-gold text-deepCharcoal px-10 py-3.5 rounded-sm hover:bg-goldLight transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
