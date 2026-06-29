import React, { useRef, useEffect } from 'react'
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
        data-strk-bg-id="hero-bg-f1a2b3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-warm-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-white/80 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto"
        >
          Demi-fine jewelry in 18K gold — designed for everyday elegance and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold text-warm-black text-[11px] tracking-[0.15em] uppercase font-semibold px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
