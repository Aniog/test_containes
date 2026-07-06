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
        data-strk-bg-id="hero-bg-velmora-7x9k2m"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subhead"
            className="mt-4 text-base md:text-lg text-white/80 font-light max-w-md"
          >
            Demi-fine gold jewelry designed for the modern woman. Timeless pieces at an accessible luxury price point.
          </p>
          <Link
            to="/collection"
            className="inline-block mt-8 bg-gold text-white px-8 py-3.5 text-sm font-medium tracking-wider hover:bg-gold-dark transition-colors"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </div>
    </section>
  )
}
