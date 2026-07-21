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
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-cream/80 text-base md:text-lg font-light leading-relaxed"
        >
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-white px-10 py-3.5 text-xs font-semibold uppercase tracking-wide-product hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
