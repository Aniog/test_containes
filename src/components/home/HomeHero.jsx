import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          data-strk-img-id="hero-bg-a1b2c3"
          data-strk-img="[hero-subtitle] [hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/60 via-warm-black/30 to-warm-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold/90 mb-6">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-tight mb-6"
        >
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/70 text-sm md:text-base font-sans font-light max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Demi-fine gold jewelry designed for the modern woman — where everyday elegance meets lasting quality.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-cream/30 flex justify-center">
          <div className="w-0.5 h-2 bg-cream/50 rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}