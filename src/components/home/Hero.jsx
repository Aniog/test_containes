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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-vm01a2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-4"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream/70 text-base md:text-lg font-light leading-relaxed mb-8 max-w-md"
          >
            Demi-fine gold jewelry designed for everyday elegance. Timeless pieces at an accessible luxury price point.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-cream px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] hover:bg-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
