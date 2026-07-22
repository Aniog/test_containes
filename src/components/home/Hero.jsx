import React, { useRef, useEffect } from 'react'
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
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a8b9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-2xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-white/80 font-light leading-relaxed mb-8 max-w-md mx-auto"
        >
          Demi-fine gold jewelry for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-sans text-xs tracking-product uppercase px-8 py-3.5 transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
