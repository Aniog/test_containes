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
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-v3lm0r4"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-4"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream/80 text-base md:text-lg font-light mb-8 max-w-md"
          >
            Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, modern elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-cream px-8 py-3.5 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
