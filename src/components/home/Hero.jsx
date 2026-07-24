import { useEffect, useRef } from 'react'
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
        data-strk-bg-id="velmora-hero-bg-x1y2z3"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-white/80 text-base md:text-lg font-light max-w-lg mx-auto"
        >
          Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-accent text-white px-10 py-3.5 text-xs tracking-widest uppercase hover:bg-accent-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
