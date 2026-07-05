import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-transform duration-[20s] ease-out ${loaded ? 'scale-105' : 'scale-100'}`}
        data-strk-bg-id="hero-bg-7a8b9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />

      {/* Content */}
      <div className={`relative z-10 text-center px-5 max-w-2xl mx-auto transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white font-light leading-tight tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base text-warm-white/80 font-light leading-relaxed max-w-md mx-auto"
        >
          Demi-fine gold jewelry designed for everyday elegance. Each piece tells a story of craftsmanship and grace.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold text-warm-white px-10 py-3.5 text-xs uppercase tracking-btn font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-px h-8 bg-warm-white/40 mx-auto animate-pulse" />
      </div>
    </section>
  )
}
