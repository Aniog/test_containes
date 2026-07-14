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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f8a9b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base text-cream/80 font-sans leading-relaxed max-w-lg mx-auto"
        >
          Demi-fine jewelry in 18K gold plate. Designed for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold hover:bg-gold-hover text-cream font-sans text-xs font-semibold tracking-widest uppercase px-10 py-3.5 transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
