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
        className="absolute inset-0 transition-transform duration-[20s] ease-out scale-105"
        style={{ transform: loaded ? 'scale(1)' : 'scale(1.05)' }}
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className={`font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight tracking-wide transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className={`mt-4 md:mt-6 text-sm md:text-base text-white/80 font-light tracking-wide max-w-lg mx-auto transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Demi-fine jewelry in 18K gold. Designed for everyday elegance, made to last.
        </p>
        <Link
          to="/shop"
          className={`inline-block mt-8 bg-gold text-warm-black px-10 py-3.5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-all duration-500 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
