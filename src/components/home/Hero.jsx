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
        data-strk-bg-id="hero-bg-k1l2m3"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-warm-cream font-light leading-tight tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 font-sans text-sm md:text-base text-warm-cream/80 tracking-wide max-w-lg mx-auto"
        >
          Demi-fine gold jewelry designed for everyday elegance. Each piece tells a story worth wearing.
        </p>
        <Link to="/shop" className="btn-primary inline-block mt-8 md:mt-10">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
