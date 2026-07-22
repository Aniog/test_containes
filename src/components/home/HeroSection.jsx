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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px]">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f8a9b"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry warm close-up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-cream mb-4">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-sm md:text-base text-cream/80 max-w-md mb-8">
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="bg-gold text-charcoal font-sans text-xs tracking-ui uppercase px-8 py-3 hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
