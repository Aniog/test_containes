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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px]">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-white/80 text-base md:text-lg max-w-lg tracking-wide"
        >
          Demi-fine gold jewelry designed for the everyday and the unforgettable
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-champagne text-white px-10 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-champagne-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
