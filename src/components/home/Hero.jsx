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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/30 to-base/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold-light mb-4 animate-fade-in">
          Demi-fine jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1] mb-6 animate-fade-in"
          style={{ animationDelay: '0.15s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm sm:text-base text-cream/70 max-w-md leading-relaxed mb-8 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          18K gold-plated jewelry designed for everyday elegance. 
          Hypoallergenic. Thoughtfully crafted. Made to last.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-10 py-3.5 bg-gold text-base text-xs font-medium tracking-widest-xl uppercase hover:bg-gold-dark transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.45s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-cream/40 text-2xs tracking-widest-xl uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  )
}
