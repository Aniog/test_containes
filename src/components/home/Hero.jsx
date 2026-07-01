import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
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
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-surface font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-stone-300 mt-4 md:mt-6 tracking-wide leading-relaxed"
        >
          Demi-fine gold jewelry for the everyday and the unforgettable
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold hover:bg-gold-hover text-white px-10 py-3.5 text-xs uppercase tracking-nav font-sans transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
