import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/50 z-1" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-widest uppercase text-stone-50 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-stone-200 text-base md:text-lg mt-6 leading-relaxed max-w-xl mx-auto"
        >
          Demi-fine gold jewelry for everyday elegance. Each piece designed to move with you, from morning to night.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-stone-900 font-serif uppercase tracking-widest text-sm px-8 py-3 hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
