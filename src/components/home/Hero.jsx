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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a8b9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide uppercase text-velmora-cream leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 font-sans text-sm md:text-base text-velmora-cream/80 max-w-lg tracking-wide"
        >
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 font-sans text-xs font-semibold tracking-ultra-wide uppercase bg-velmora-gold text-velmora-charcoal px-10 py-4 hover:bg-velmora-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
