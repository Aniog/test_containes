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
    <section ref={containerRef} className="relative h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-gold-jewelry-a7f3c1"
        data-strk-bg="[hero-subhead] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-20 md:pb-28 px-4 text-center">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight animate-fade-in"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="mt-4 text-sm md:text-base text-white/80 max-w-lg leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Premium demi-fine jewelry in 18K gold — designed for everyday elegance,
          crafted to last a lifetime.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block px-10 py-3.5 bg-velmora-gold text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-velmora-gold-dark transition-colors duration-300 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
