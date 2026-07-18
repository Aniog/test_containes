import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a8b9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-base md:text-lg text-white/80 font-light tracking-wide max-w-lg mx-auto"
        >
          Demi-fine gold jewelry designed for everyday elegance
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold text-white px-10 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
