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
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-warm-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 font-sans text-sm md:text-base text-ivory/80 max-w-lg leading-relaxed"
        >
          Demi-fine gold jewelry designed for everyday elegance. Each piece tells a story of craftsmanship and care.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-gold text-warm-black font-sans text-xs font-semibold tracking-wide-btn uppercase px-10 py-3.5 hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
