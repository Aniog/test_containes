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
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-warm-black"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight hero-animate hero-delay-1"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base font-light tracking-wide text-white/80 max-w-lg mx-auto hero-animate hero-delay-2"
        >
          Demi-fine jewelry in 18K gold. Designed for everyday elegance, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-warm-black px-10 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark hover:shadow-lg transition-all duration-300 hero-animate hero-delay-3"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
